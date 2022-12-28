import { useHover } from 'hooks';
import React from 'react';
import { HitsModal } from '../HitsModal';

import styles from './MenuLayoutOptionsItem.module.scss';

interface MenuLayoutOptionsItemType {
icon: string | undefined
text: string
onClick: () => void
}

const MenuLayoutOptionsItem:React.FC<MenuLayoutOptionsItemType> = ({icon, text, onClick}) => {
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(hoverRef)

  return (
    <>
      <div onClick={() => onClick()} ref={hoverRef} className={styles.container}>
        <div className={styles.item}>
      <img src={icon} alt="icon menu layout" />
        </div>
      </div>
    {hover &&
      <div className={styles.hits}>
    <HitsModal value={text} width={200}/>
      </div>
      }
    </>
  );
};

export  {MenuLayoutOptionsItem};