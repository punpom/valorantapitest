import WeaponCard from '../components/WeaponCard/WeaponCard'
import { useWeapons } from '../hooks/useWeapons'
import { WeaponType } from '../types/types'
import Error from '../components/Error/Error'

const Weapons: React.FC = () => {
    const { isPending, error, data } = useWeapons()

    if (isPending) return 'Loading..'

    if (error) return <Error message={error.message} />
    return (
        <>
            <div className="grid">
                {data.map((info: WeaponType) => {
                    return <WeaponCard key={info.uuid} info={info} />
                })}
            </div>
        </>
    )
}

export default Weapons
