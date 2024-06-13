import { MapType } from '../../types/types'
import './MapCard.css'

interface MapCardProps {
    info: MapType
}

const MapCard: React.FC<MapCardProps> = ({ info }) => {
    return (
        <div className="mapcard">
            <div className="mapcard_main">
                <div
                    className="mapcard_background"
                    style={{
                        backgroundImage: `url(${info.stylizedBackgroundImage})`,
                    }}
                ></div>
                <div className="mapcard_footer">
                    <div className="map_name">
                        {info.displayName.toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapCard
