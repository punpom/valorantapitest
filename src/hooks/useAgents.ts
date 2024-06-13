import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetchAgents } from '../services/agentsService'
import { AgentType } from '../types/types'

export const useAgents = (): UseQueryResult<AgentType[], Error> => {
    return useQuery<AgentType[], Error>({
        queryKey: ['valorantAgents'],
        queryFn: fetchAgents,
    })
}
