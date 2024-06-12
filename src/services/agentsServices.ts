import axios from "axios";

export const fetchAgents = async () => {
    const response = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
    return response.data;
}