import React from 'react';
import { icons, iconsGame } from 'data';

import styles from './SityList.module.scss';
import { CustomSelectGame } from '../CustomSelectGame';
import { HitsModal } from '../HitsModal';
import { useHover } from 'hooks';
import { IPlayerType } from 'models/GameType';

interface SityListType {
  playerData: IPlayerType
}

const SityList: React.FC<SityListType> = ({playerData}) => {
  const hitsRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(hitsRef)

  let defautSelectValue = ''
  if (playerData) {
    defautSelectValue = playerData.nameSity
  }


  return (
    <div className={styles.root}>
      <div className={styles.container}>
    <div className={styles.prevSityArrow}>
    <img src={icons.arrowLeft} alt="icon arrow Left" />
       </div>
    <div className={styles.selectMenu}>
      {playerData && 
      <CustomSelectGame onChange={(value) => {}} options={[{value: defautSelectValue, label: defautSelectValue}]} defaultValue={{label: playerData.nameSity, value: playerData.nameSity}}/>
      }
    </div>
    <div ref={hitsRef} className={styles.menu}>
    <img src={iconsGame['menuGame']} alt="icon menu" />
       </div>

    <div className={styles.nextSityArrow}>
    <img src={icons.arrowLeft} alt="icon arrow Left" />
       </div>
      </div>
        {hover && 
      <div className={styles.hits}>
      <HitsModal value='Обзор городов' width={135}/>
      </div>
        }

    </div>
  );
};

export {SityList};