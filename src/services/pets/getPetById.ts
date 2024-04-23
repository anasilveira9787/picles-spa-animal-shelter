import { IPet } from "../../interfaces/pets";
import httpClient from "../api/httpClient";

export async function getPetById(id: string): Promise<IPet> {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await httpClient.get(`/pet/${id}`);
    return response.data;
  } catch (error) {
    console.error()
    throw error;
  }
}