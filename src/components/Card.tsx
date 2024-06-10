import { useState, useEffect } from 'react';
import { InfoType } from '../types/types'
import { useModalStore } from '../store';
import { getColorSelector } from '../utils/colorSelector';


interface CardProps {
    info: InfoType
}

const Card: React.FC<CardProps> = ({ info}) => {
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const showModal = useModalStore((state) => state.showModal);


    useEffect(() => {
        const { color1, color2 } = getColorSelector(info.displayName);
        setColor1(color1);
        setColor2(color2);
    }, [info.displayName]);

    return (
        <div className="card">
            <div className="card_main" style={{backgroundImage: `linear-gradient(180deg, ${color1} 31%, ${color2} 72%)`}}> 
                <div className="card_background" style={{backgroundImage: `url(${info.background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100%"}}>
                    <div className="card_infos">
                        <div className="card_abilities">
                            <img className='first_abilities' alt='first ability of the agent' src={info.abilities[0].displayIcon}/> 
                            <img className='second_abilities' alt='first ability of the agent' src={info.abilities[1].displayIcon}/> 
                            <img className='third_abilities' alt='first ability of the agent' src={info.abilities[2].displayIcon}/> 
                            <img className='fourth_abilities' alt='first ability of the agent' src={info.abilities[3].displayIcon}/> 
                        </div>
                        <div className="card_role">
                            <img className="role_img" alt="role of the agent" src={info.role.displayIcon}/>
                        </div>
                    </div>
                    <img className="agent_img" src={info.fullPortraitV2}/> 
                </div>
            </div>
            <div className="card_footer">
                <p className='agent_name'>{info.displayName.toUpperCase()}</p>
            </div>
            <div className="card_blur">
                <button className="card_button" onClick={() => showModal(info)}>VIEW</button>
            </div>
        </div>
    )
}

export default Card;
