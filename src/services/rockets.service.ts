import axios from "axios";
import { apiClient, handleApiError } from "./spacex.service";

export const getRockets = async () => {
  try {

    const response = await apiClient.get('/rockets');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getRocketById = async (id: string) => {
  try {
    const response = await apiClient.get(`/rockets/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
