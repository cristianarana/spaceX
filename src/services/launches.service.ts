import axios from "axios";
import { apiClient, handleApiError } from "./spacex.service";

export const getLaunches = async () => {
  try {

    const response = await apiClient.get('/launches');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getLaunchById = async (id: string) => {
  try {
    const response = await apiClient.get(`/launches/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
