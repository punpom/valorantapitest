import React, { useEffect, useState, useRef } from 'react';
import { InfoType } from '../types/types';
import { useModalStore } from '../store';
import { getColorSelector } from '../utils/colorSelector';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    info: InfoType | null;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, info }) => {
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (info) {
            const { color1, color2 } = getColorSelector(info.displayName);
            setColor1(color1);
            setColor2(color2);
        }
    }, [info]);

    if (!isVisible || !info) return null;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.x;
            const y = e.clientY - rect.y;
            const midCardWidth = rect.width / 2;
            const midCardHeight = rect.height / 2;
            const angleY = -(x - midCardWidth) / 16;
            const angleX = (y - midCardHeight) / 16;
            cardRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1)`;
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "rotateX(0) rotateY(0)";
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" ref={cardRef} onClick={(e) => e.stopPropagation()} onMouseMove={(e) => {
        if (cardRef.current) {
        let rect = cardRef.current.getBoundingClientRect();

        let x = e.clientX - rect.x;
        let y = e.clientY - rect.y;

        let midCardWidth = rect.width / 2;
        let midCardHeight = rect.height / 2;

        let angleY = -(x - midCardWidth) / 16;
        let angleX = (y - midCardHeight) / 16;

        cardRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1)`;

        }
        }
        } onMouseLeave={() => { if (cardRef.current) {cardRef.current.style.transform = "rotateX(0) rotateY(0)"}}}>
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
    );
};

const ConnectedModal: React.FC = () => {
    const { isVisible, selectedInfo, closeModal } = useModalStore();
    return <Modal isVisible={isVisible} onClose={closeModal} info={selectedInfo} />;
};

export default ConnectedModal;
