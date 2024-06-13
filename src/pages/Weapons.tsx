import WeaponCard from '../components/WeaponCard/WeaponCard'
import { useWeapons } from '../hooks/useWeapons'
import { WeaponType } from '../types/types'

const Weapons: React.FC = () => {
    const { isPending, error, data } = useWeapons()

    if (isPending) return 'Loading..'

    if (error) return 'An error occured' + error.message
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
