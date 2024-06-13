import { BundleType } from '../../types/types'

interface BundleCardProps {
    info: BundleType
}

const BundleCard: React.FC<BundleCardProps> = ({ info }) => {
    return (
        <div className="bundlecard">
            <div className="bundlecard_body">{info.displayName}</div>
            <div className="bundlecard_footer"></div>
        </div>
    )
}

export default BundleCard
