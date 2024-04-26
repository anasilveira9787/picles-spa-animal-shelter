import { AddPetRequest, IPet } from '../../interfaces/pets'
import httpClient from '../api/httpClient'

export async function addPet(params: AddPetRequest): Promise<IPet> {
  try {
    const response = await httpClient.post('/pet', params)
    return response.data
  } catch (error) {
    console.error('Erro ao adicionar pet:', error)
    throw error
  }
}