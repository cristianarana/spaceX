import { apiClient } from "./spacex.service";
import {Flight} from "../interfaces/flight.interface";


export const getFlights = async (): Promise<Flight[]> => {
    const response = await apiClient.get("/launches");
    const allLaunches = response.data;

    const flights: Flight[] = await Promise.all(
      allLaunches.map(async (launch: any) => {
        const launch_rocket = await apiClient.get(
          `/rockets/${launch.rocket.rocket_id}`
        );
        const rocketData = launch_rocket.data;
        return {
          flight_number: launch.flight_number,
          mission_name: launch.mission_name,
          rocket: {
            rocket_id: rocketData.rocket_id,
            rocket_name: rocketData.rocket_name,
            description: rocketData.description,
            images: rocketData.flickr_images,
          },
          payloads: launch.rocket.second_stage.payloads.map((payload: any) => ({
            payload_id: payload.payload_id,
            manufacturer: payload.manufacturer,
            type: payload.payload_type,
          })),
        };
      })
    );
    return flights;
};
