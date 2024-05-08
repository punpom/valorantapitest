import { useState, useEffect } from 'react';
import { InfoType } from '../types/types'

interface Props {
    Info: InfoType
}

function Card(props: Props) {
    const { Info } = props
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")


    useEffect(() => {
        switch (Info.displayName) {
            case "Gekko":
                setColor1("#3A2656");
                setColor2("#3A7233");
                break;
            case "Fade":
                setColor1("#18344C");
                setColor2("#387AB2");
                break;
            case "Breach":
                setColor1("#B04621");
                setColor2("#44412E");
                break;
            case "Deadlock":
                setColor1("#BCC2FF");
                setColor2("#221C3D");
                break;
            case "Raze":
                setColor1("#2B474B");
                setColor2("#D64F35");
                break;
            case "Chamber":
                setColor1("#163555");
                setColor2("#372D2B");
                break;            
            case "KAY/O":
                setColor1("#391A61");
                setColor2("#1A1E4B");
                break;
            case "Skye":
                setColor1("#AA8A49");
                setColor2("#314D48");
                break;
            case "Cypher":
                setColor1("#2B527C");
                setColor2("#3F3F6C");
                break;
            case "Sova":
                setColor1("#082652");
                setColor2("#392931");
                break;
            case "Killjoy":
                setColor1("#B87B00");
                setColor2("#413950");
                break;
            case "Harbor":
                setColor1("#136C6B");
                setColor2("#0C262C");
                break;
            case "Viper":
                setColor1("#2C4F5E");
                setColor2("#347334");
                break;
            case "Phoenix":
                setColor1("#EA6D4E");
                setColor2("#363B42");
                break;
            case "Astra":
                setColor1("#5210C6");
                setColor2("#A54498");
                break;
            case "Brimstone":
                setColor1("#892C1B");
                setColor2("#282B38");
                break;
            case "Iso":
                setColor1("#AC52FF");
                setColor2("#20155D");
                break;
            case "Clove":
                setColor1("#C347C7");
                setColor2("#062261");
                break;
            case "Neon":
                setColor1("#6241CC");
                setColor2("#2C4799");
                break;
            case "Yoru":
                setColor1("#3B37A7");
                setColor2("#101042");
                break;
            case "Sage":
                setColor1("#41819A");
                setColor2("#226071");
                break;
            case "Reyna":
                setColor1("#2F2664");
                setColor2("#2F203F");
                break;
            case "Omen":
                setColor1("#344673");
                setColor2("#4F53AF");
                break;
            case "Jett":
                setColor1("#557F8C");
                setColor2("#1E3344");
                break;

        }
    }, [Info.displayName]);


    return (
        <div className="card">
            <div className="card_main" style={{backgroundImage: `linear-gradient(180deg, ${color1} 31%, ${color2} 72%)`}}> 
                <div className="card_background" style={{backgroundImage: `url(${Info.background})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "100%"}}>
                <div className="card_infos">
                    <div className="card_abilities">
                        <img className='first_abilities' alt='first ability of the agent' src={Info.abilities[0].displayIcon}/> 
                        <img className='second_abilities' alt='first ability of the agent' src={Info.abilities[1].displayIcon}/> 
                        <img className='third_abilities' alt='first ability of the agent' src={Info.abilities[2].displayIcon}/> 
                        <img className='fourth_abilities' alt='first ability of the agent' src={Info.abilities[3].displayIcon}/> 
                    </div>
                    <div className="card_role">
                        <img className="role_img" alt="role of the agent" src={Info.role.displayIcon}/>
                    </div>
                    </div>
                        <img className="agent_img" src={Info.fullPortraitV2}/> 
                        </div>
                         </div>
                    <div className="card_footer">
                    <p className='agent_name'>{Info.displayName.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default Card
