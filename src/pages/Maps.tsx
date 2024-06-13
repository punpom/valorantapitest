import MapCard from '../components/MapCard/MapCard'
import { useMaps } from '../hooks/useMaps'
import { MapType } from '../types/types'

const Maps: React.FC = () => {
    const { isPending, error, data } = useMaps()

    if (isPending) return 'Loading..'

    if (error) return 'An error has occured: ' + error.message

    return (
        <>
            <div className="grid">
                {data.map((info: MapType) => {
                    return <MapCard key={info.uuid} info={info} />
                })}
            </div>
        </>
    )
}

export default Maps
