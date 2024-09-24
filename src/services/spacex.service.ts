import axios from "axios";

const SPACEX_API_URL = process.env.SPACEX_API_URL || "https://api.spacexdata.com/v3";

export const apiClient = axios.create({
  baseURL: SPACEX_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error: any) => {
  console.error("API call error:", error);
  throw new Error("Failed to fetch data from SpaceX API");
};
