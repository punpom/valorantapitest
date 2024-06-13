import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../config'
import { BundleType } from '../types/types'

interface BundlesResponse {
    data: BundleType[]
}

const API_PATH: string = 'bundles'

export const fetchBundles = async (): Promise<BundleType[]> => {
    try {
        const response: AxiosResponse<BundlesResponse> = await axios.get(
            API_URL + API_PATH
        )

        return response.data.data
    } catch (error) {
        console.error(error)

        throw error
    }
}
