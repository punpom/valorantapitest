import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { WeaponType } from '../types/types'
import { fetchWeapons } from '../services/weaponsService'

export const useMaps = (): UseQueryResult<WeaponType[], Error> => {
    return useQuery<WeaponType[], Error>({
        queryKey: ['valorantWeapons'],
        queryFn: fetchWeapons,
    })
}
