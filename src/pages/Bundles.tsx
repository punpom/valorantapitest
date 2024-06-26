import BundleCard from '../components/BundleCard/BundleCard'
import { useBundles } from '../hooks/useBundles'
import { BundleType } from '../types/types'
import Error from '../components/Error/Error'

const Bundles: React.FC = () => {
    const { isPending, error, data } = useBundles()

    if (isPending) return 'Loading..'

    if (error) return <Error message={error.message} />

    return (
        <>
            <div className="grid">
                {data.map((info: BundleType) => {
                    return <BundleCard key={info.uuid} info={info} />
                })}
            </div>
        </>
    )
}

export default Bundles
