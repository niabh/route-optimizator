import { CustomerAddress } from "./customer-address.model";
import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class MapboxV2Service {
	calculate({
		origin,
		destination,
		stops,
		stopOptions,
		startTime,
		endTime
	}: {
		origin: CustomerAddress;
		destination: CustomerAddress;
		stops: Array<CustomerAddress>;
		stopOptions: Array<{ time: string }>;
		startTime: string;
		endTime: string;
	}): Observable<any> {
		const locations = this.mapLocations([origin, ...stops, destination]);
		const vehicles = this.getDefaultVehicles(
			origin,
			destination,
			startTime,
			endTime
		);
		const shipments = this.getShipments(origin, stops, stopOptions);
		const json = {
			version: 1,
			locations: locations,
			vehicles: vehicles,
			shipments: shipments
		};
		const headers = new HttpHeaders({
			"Content-Type": "application/json"
		});
		return this.httpClient
			.post(
				`https://api.mapbox.com/optimized-trips/v2?access_token=${environment.mapboxToken}`,
				json,
				{ headers: headers }
			)
			.pipe(
				map((res: any) => {
					res.solution = this.getSolutionWaypoints(res, [
						origin,
						...stops,
						destination
					]);
					return res;
				})
			);
	}

	private getDefaultVehicles(
		origin: CustomerAddress,
		destination: CustomerAddress,
		startTime: string,
		endTime: string
	) {
		return [
			{
				name: "default-vehicle",
				routing_profile: "mapbox/driving",
				start_location: origin.company,
				end_location: destination.company,
				earliest_start: this.mapTime(startTime),
				latest_end: this.mapTime(endTime)
			}
		];
	}

	private mapTime(time: string) {
		let offset = new Date().getTimezoneOffset();
		const isoDate = new Date(new Date().getTime() - offset * 60 * 1000);
		const today = isoDate.toISOString().split("T")[0];
		return `${today}T${time}:00Z`;
	}

	private mapLocations(locations: Array<CustomerAddress>) {
		return locations.map((location) => {
			return {
				name: location.company,
				coordinates: [location.longitude, location.latitude]
			};
		});
	}

	private getShipments(
		origin: CustomerAddress,
		stops: Array<CustomerAddress>,
		stopOptions: Array<{ time: string }>
	) {
		const times = stopOptions.map((stop) => stop.time);
		console.log("stop options", stopOptions, times);
		const averageDurationMinutes =
			this.getTotalMinutes(times) / stops.length;
		return stops.map((stop) => {
			return {
				name: `order-${uuidv4}`,
				from: origin.company,
				to: stop.company,
				dropoff_duration: averageDurationMinutes
			};
		});
	}

	private getTotalMinutes(times: Array<string>) {
		let minutes = 0;
		console.log(times);

		for (let time of times) {
			console.log("time", time);
			let [currentMinutes, currentHours]: any = time.split(":");
			currentMinutes =
				Number.parseInt(currentMinutes) +
				Number.parseInt(currentHours) * 60;
			minutes += currentMinutes;
		}
		return minutes;
	}

	private getSolutionWaypoints(res: any, locations: Array<CustomerAddress>) {
		if (res && res.route && res.route[0] && res.route[0].stops) {
			let waypoints = [];
			for (let stop of res.route[0].stops) {
				const match = locations.find(
					(location) => location.company == stop.location
				);
				if (match) {
					waypoints.push(match);
				}
			}
			return waypoints;
		}
	}

	constructor(private httpClient: HttpClient) {}
}
