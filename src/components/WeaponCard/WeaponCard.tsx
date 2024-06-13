import { WeaponType } from '../../types/types'
import './WeaponCard.css'

interface WeaponCardProps {
    info: WeaponType
}

const WeaponCard: React.FC<WeaponCardProps> = ({ info }) => {
    if (!info.displayIcon || !info.displayName) {
        return null
    }
    return (
        <div className="weaponcard">
            <div className="weaponcard_body">
                <img className="weaponcard_icon" src={info.displayIcon} />
            </div>

            <div className="weaponcard_footer">
                <div className="weapon_name">{info.displayName}</div>
            </div>
        </div>
    )
}

export default WeaponCard
