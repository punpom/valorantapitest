import { useQuery } from "@tanstack/react-query";
import { fetchAgents } from "../services/agentsServices";

export const useAgents = () => {
    return useQuery({
        queryKey: ['valorantAgents'],
        queryFn: fetchAgents
    })
};