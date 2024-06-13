import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { BundleType } from '../types/types'
import { fetchBundles } from '../services/bundlesService'

export const useMaps = (): UseQueryResult<BundleType[], Error> => {
    return useQuery<BundleType[], Error>({
        queryKey: ['valorantBundles'],
        queryFn: fetchBundles,
    })
}
