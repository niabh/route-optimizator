import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerAddress } from "./customer-address.model";
import { environment } from "./environment";

@Injectable({
	providedIn: "root"
})
export class MapboxV1Service {
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
		stopOptions?: Array<{ time: string }> | undefined;
		startTime?: string | undefined;
		endTime?: string | undefined;
	}): Observable<any> {
		const headers = new HttpHeaders({
			"Content-Type": "application/json"
		});
		const coordinates = [origin, ...stops, destination]
			.map((stop) => `${stop.longitude},${stop.latitude}`)
			.join(";");

		return this.httpClient
			.get(
				`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates}?source=first&destination=last&access_token=${environment.mapboxToken}`,
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

	private getSolutionWaypoints(res: any, locations: Array<CustomerAddress>) {
		const copy: any = [...locations];
		let sorted: any = [];
		if (res && res.waypoints) {
			for (let i = 0; i < res.waypoints.length; i++) {
				copy[i].order = res.waypoints[i].waypoint_index;
			}
			sorted = copy.sort((a, b) => a.order - b.order);
		}
		return sorted;
	}

	constructor(private httpClient: HttpClient) {}
}
