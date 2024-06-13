import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { MapType } from '../types/types'
import { fetchMaps } from '../services/mapsService'

export const useMaps = (): UseQueryResult<MapType[], Error> => {
    return useQuery<MapType[], Error>({
        queryKey: ['valorantMaps'],
        queryFn: fetchMaps,
    })
}
