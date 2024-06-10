import { useEffect, useState } from 'react'
import { InfoType } from '../types/types';
import { useModalStore } from '../store';
import { getColorSelector } from '../utils/colorSelector';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    info: InfoType | null;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, info }) => {
    if(!isVisible || !info) return null;

    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")

    useEffect(() => {
      const { color1, color2 } = getColorSelector(info.displayName);
      setColor1(color1);
      setColor2(color2);
  }, [info.displayName]);
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-card">
              <div className="modal-card_main" style={{backgroundImage: `linear-gradient(180deg, ${color1} 31%, ${color2} 72%)`}}> 
                  <div className="modal-card_background" style={{backgroundImage: `url(${info.background})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "100%"}}>
                      <div className="modal-card_infos">
                          <div className="modal-card_abilities">
                              <img className='first_abilities' alt='first ability of the agent' src={info.abilities[0].displayIcon}/> 
                              <img className='second_abilities' alt='first ability of the agent' src={info.abilities[1].displayIcon}/> 
                              <img className='third_abilities' alt='first ability of the agent' src={info.abilities[2].displayIcon}/> 
                              <img className='fourth_abilities' alt='first ability of the agent' src={info.abilities[3].displayIcon}/> 
                          </div>
                          <div className="modal-card_role">
                              <img className="role_img" alt="role of the agent" src={info.role.displayIcon}/>
                          </div>
                      </div>
                      <img className="agent_img" src={info.fullPortraitV2}/> 
                  </div>
              </div>
              <div className="modal-card_footer">
                  <p className='agent_name'>{info.displayName.toUpperCase()}</p>
              </div>
          </div>
      </div>
  </div>
  )
}

const ConnectedModal: React.FC = () => {
  const { isVisible, selectedInfo, closeModal } = useModalStore();
  console.log(isVisible)
  return <Modal isVisible={isVisible} onClose={closeModal} info={selectedInfo} />

}

export default ConnectedModal;