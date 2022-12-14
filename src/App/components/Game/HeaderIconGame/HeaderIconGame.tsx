import { useHover } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { gameModalAction } from 'store/slice';
import { HitsModal } from '../HitsModal';

import styles from './HeaderIconGame.module.scss';

interface HeaderIconGameType {
  value: number | undefined
  icon: string | undefined
  text: string
}

const HeaderIconGame: React.FC<HeaderIconGameType> = ({icon, value, text}) => {
  const myRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(myRef)
  const dispatch = useDispatch()

  const handleActiveModal = () => {
    dispatch(gameModalAction.setModalActive({value: 'Аукцион'}))
  }

  return (
    <div  className={styles.populations}>
      <div 
      onClick={() => handleActiveModal()}
      className={styles.container}>

          <div ref={myRef} className={styles.iconContainer}>
            <img src={icon} alt="icon population" />
          </div>
              <span>{value}</span>

              {hover && 
              <div className={styles.hitsModal}>
             <HitsModal value={text}  width={200}/>
              </div>
            }
           
            </div>
    </div>
   
         
              
  );
};

export {HeaderIconGame};