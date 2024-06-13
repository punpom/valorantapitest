import axios, { AxiosResponse } from 'axios'
import { AgentType } from '../types/types'
import { API_URL } from '../config'

interface AgentsResponse {
    data: AgentType[]
}

const API_PATH: string = 'agents?isPlayableCharacter=true'

export const fetchAgents = async (): Promise<AgentType[]> => {
    try {
        const response: AxiosResponse<AgentsResponse> = await axios.get(
            API_URL + API_PATH
        )

        // returning the data received
        return response.data.data
    } catch (error) {
        console.error(error)

        throw error
    }
}
