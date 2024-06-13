import BundleCard from '../components/BundleCard/BundleCard'
import { useBundles } from '../hooks/useBundles'
import { BundleType } from '../types/types'

const Bundles: React.FC = () => {
    const { isPending, error, data } = useBundles()

    if (isPending) return 'Loading..'

    if (error) return 'An error occured' + error.message

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
