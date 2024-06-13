import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../config'
import { MapType } from '../types/types'

interface MapsResponse {
    data: MapType[]
}

const API_PATH: string = 'maps'

export const fetchMaps = async (): Promise<MapType[]> => {
    try {
        const response: AxiosResponse<MapsResponse> = await axios.get(
            API_URL + API_PATH
        )

        return response.data.data
    } catch (error) {
        console.error(error)

        throw error
    }
}
