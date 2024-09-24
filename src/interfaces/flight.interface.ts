export interface Flight {
  flight_number: number;
  mission_name: string;
  rocket: Rocket;
  payloads: Payload[];
}
