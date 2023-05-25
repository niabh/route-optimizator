export interface CustomerAddress {
	id: number;
	company: string;
	street: string;
	postalCode: string;
	locality: string;
	province: string;
	latitude: number;
	longitude: number;
	isOrigin?: boolean;
	isDestination?: boolean;
}
