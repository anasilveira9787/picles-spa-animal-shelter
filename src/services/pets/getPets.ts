import { GetPetsRequest, GetPetsResponse } from "../../interfaces/pets";
import httpClient from "../api/httpClient";

export const getPets = async (params:GetPetsRequest):Promise<GetPetsResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await httpClient.get(`/pet`,{params});
    return response.data
  } catch (error) {
    throw error
  }
};
