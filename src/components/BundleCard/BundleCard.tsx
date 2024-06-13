import { BundleType } from '../../types/types'
import './BundleCard.css'

interface BundleCardProps {
    info: BundleType
}

const BundleCard: React.FC<BundleCardProps> = ({ info }) => {
    return (
        <div className="bundlecard">
            <div className="bundlecard_body">
                <div
                    className="bundlecard_background"
                    style={{
                        backgroundImage: `url(${info.displayIcon})`,
                    }}
                ></div>
            </div>

            <div className="bundlecard_footer">
                <div className="bundle_name">{info.displayName}</div>
            </div>
        </div>
    )
}

export default BundleCard
