import axios, { AxiosResponse } from "axios";
import { AgentType } from "../types/types";

//API constant
const API_URL = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

interface AgentsResponse {
    status: number;
    data: AgentType[];
}

export const fetchAgents = async (): Promise<AgentType[]> => {
    try {
    
    const response: AxiosResponse<AgentsResponse> = await axios.get(API_URL);

    // returning the data received
    return response.data.data;

    } catch (error) {

        console.error(error);

        throw error;
    }
}