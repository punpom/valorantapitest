import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../config'
import { WeaponType } from '../types/types'

interface WeaponsResponse {
    data: WeaponType[]
}

const API_PATH: string = 'weapons'

export const fetchWeapons = async (): Promise<WeaponType[]> => {
    try {
        const response: AxiosResponse<WeaponsResponse> = await axios.get(
            API_URL + API_PATH
        )

        return response.data.data
    } catch (error) {
        console.error(error)

        throw error
    }
}
