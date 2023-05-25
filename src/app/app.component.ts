import { LeafletIconGlyphService } from "./leaflet-icon-glyph";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { latLng, tileLayer, Icon, icon, Marker } from "leaflet";
import { default as jsonData } from "./customer-addresses.json";
import { CustomerAddress } from "./customer-address.model";
import "leaflet";
import * as polyUtil from "polyline-encoded";
import "leaflet-routing-machine";
import { ConfirmationService, MessageService } from "primeng/api";
import { MapboxV1Service as MapboxService } from "./mapbox-v1.service";
declare let L;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	constructor(
		private confirmationService: ConfirmationService,
		private mapboxService: MapboxService,
		private leafletIconGlyphService: LeafletIconGlyphService
	) {
		this.leafletIconGlyphService.setup();
		this.locations = (jsonData.data as Array<CustomerAddress>).map(
			(address) => {
				address.isOrigin = false;
				address.isDestination = false;
				return address;
			}
		);
	}

	// LOCATIONS + MODAL
	showCustomerAddressesModal: boolean = false;
	locations: Array<CustomerAddress> = [];
	selectedLocations = [];

	onAddNewCustomAddressButtonClicked() {
		this.tmpSelectedLocations = [...this.selectedLocations];
		this.showCustomerAddressesModal = true;
	}

	tmpSelectedLocations = [];
	tmpSelectedLocation: any = {};
	suggestedLocations: Array<CustomerAddress> = [];
	suggestLocations(event) {
		const selectedIds = this.selectedLocations.map(
			(location) => location.id
		);
		this.suggestedLocations = this.locations
			.filter((location) => !selectedIds.includes(location.id))
			.filter((location) =>
				location.company
					.toLocaleLowerCase()
					.includes(event.query.toLocaleLowerCase())
			);
	}

	onLocationSelected() {
		if (this.tmpSelectedLocation.id) {
			this.tmpSelectedLocations = [
				...this.tmpSelectedLocations,
				{ ...this.tmpSelectedLocation }
			];
			this.tmpSelectedLocation = "";
		}
	}

	onAddTmpLocationsButtonClicked(event: any) {
		const matches = this.tmpSelectedLocations.filter(
			(location) => location.isOrigin || location.isDestination
		);
		if (matches && matches.length == 2) {
			this.selectedLocations = [...this.tmpSelectedLocations];
			this.tmpSelectedLocations = [];
			this.showCustomerAddressesModal = false;
		} else {
			let msg =
				"Es obligatorio marcar una dirección de origen y otra de destino.";
			if (matches.length == 1) {
				if (matches[0].isOrigin) {
					msg = "Es obligatorio marcar una dirección de destino.";
				} else {
					msg = "Es obligatorio marcar una dirección de origen.";
				}
			}
			this.confirmationService.confirm({
				target: event.target,
				message: msg,
				acceptLabel: "Aceptar",
				rejectVisible: false,
				icon: "pi pi-exclamation-triangle",
				accept: () => {},
				reject: () => {
					this.showCustomerAddressesModal = false;
				}
			});
		}
	}

	resetOrigin() {
		this.tmpSelectedLocations = this.tmpSelectedLocations.map(
			(location) => {
				location.isOrigin = false;
				return location;
			}
		);
	}

	resetDestination() {
		this.tmpSelectedLocations = this.tmpSelectedLocations.map(
			(location) => {
				location.isDestination = false;
				return location;
			}
		);
	}

	getOriginLocation() {
		const match = this.selectedLocations.find(
			(location) => location.isOrigin
		);
		if (match) {
			return match;
		}
		return { company: "" };
	}

	getIntermediateLocations() {
		return this.selectedLocations.filter(
			(location) => !location.isOrigin && !location.isDestination
		);
	}

	getDestinationLocation() {
		const match = this.selectedLocations.find(
			(location) => location.isDestination
		);
		if (match) {
			return match;
		}
		return { company: "" };
	}

	// STOP OPTIONS
	startTime: string = "";
	endTime: string = "";

	stopOptions: Array<{ name: string; id: number }> = [
		{ name: "Parada por descarga", id: 1 },
		{ name: "Parada por repostaje", id: 2 },
		{ name: "Parada por descanso", id: 3 }
	];
	selectedStopOptions: Array<{ id: number; time: string }> = [];

	onAddStopOptionButtonClicked() {
		this.selectedStopOptions = [
			...JSON.parse(JSON.stringify(this.selectedStopOptions || [])),
			{ id: 0, time: "" }
		];
	}

	// FILTERS
	selectedFilters = [];

	// Calculate
	totalDuration: string = "";
	travelDuration: string = "";
	droppoffsDurations: string = "";
	onCalculateRouteButtonClicked() {
		const origin = this.selectedLocations.find(
			(location) => location.isOrigin
		);
		const destination = this.selectedLocations.find(
			(location) => location.isDestination
		);
		const stops = this.selectedLocations.filter(
			(location) => !location.isOrigin && !location.isDestination
		);
		this.mapboxService
			.calculate({
				origin: origin,
				destination: destination,
				stops: stops,
				stopOptions: this.selectedStopOptions,
				startTime: this.startTime,
				endTime: this.endTime
			})
			.subscribe((res) => {
				console.log("RESPUESTA de mapbox", res);
				if (res.solution) {
					const waypoints = res.solution.map((location) =>
						L.latLng(location.latitude, location.longitude)
					);
					this.routingControl.setWaypoints(waypoints);
					this.selectedLocations = res.solution;
					const polylineDecoded = polyUtil.decode(
						res.trips[0].geometry
					);

					this.droppoffsDurations = this.secondsToHoursAndMinutes(
						this.stopsToSeconds()
					);
					this.travelDuration = this.secondsToHoursAndMinutes(
						res.trips[0].duration
					);
					this.totalDuration = this.secondsToHoursAndMinutes(
						res.trips[0].duration + this.stopsToSeconds()
					);
					L.geoJSON(polylineDecoded).addTo(this.map);
				}
			});
	}

	private stopsToSeconds() {
		let total = 0;
		for (let stop of this.selectedStopOptions) {
			if (stop.id) {
				const [h, m]: any = stop.time.split(":");
				const hours = Number.parseInt(h) * 60 * 60;
				const minutes = Number.parseInt(m) * 60;
				total += hours + minutes;
			}
		}
		return total;
	}

	private secondsToHoursAndMinutes(d: number) {
		let h = Math.floor(d / 3600);
		let m = Math.floor((d % 3600) / 60);
		let s = Math.floor((d % 3600) % 60);
		return `${h}h ${m}m ${s}s`;
	}

	// MAP!!
	options = {
		layers: [
			tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "© OpenStreetMap contributors"
			})
		],
		zoom: 2,
		center: latLng(46.879966, -121.726909)
	};

	private map = undefined;
	private routingControl = undefined;
	onMapReady(map: L.Map) {
		this.map = map;
		this.routingControl = L.Routing.control({
			show: false,
			draggableWaypoints: false,
			waypoints: [],
			showAlternatives: false,
			routeWhileDragging: false,
			lineOptions: {
				styles: [
					{
						color: "#5f99f7",
						dashArray: "5,10",
						opacity: 1,
						weight: 5
					}
				]
			},
			createMarker: (i, wp) => {
				return L.marker(wp.latLng, {
					icon: L.icon.glyph({
						prefix: "",
						glyph: i + 1 + ""
					})
				});
			}
		}).addTo(map);
	}
}
