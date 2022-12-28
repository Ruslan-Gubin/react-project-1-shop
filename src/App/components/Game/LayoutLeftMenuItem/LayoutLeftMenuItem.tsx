import { useHover } from 'hooks';
import React from 'react';
import { HitsModal } from '../HitsModal';

import styles from './LayoutLeftMenuItem.module.scss';

interface LayoutLeftMenuItemType {
icon: string | undefined
text: string
}

const LayoutLeftMenuItem: React.FC<LayoutLeftMenuItemType> = ({icon, text}) => {
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(hoverRef)
  return (
    <div className={styles.root}>
      <div ref={hoverRef} className={styles.container}>
      <img  src={icon} alt="icon item" />
      </div>
      <div className={styles.hits}>
        {hover && 
        <HitsModal width={180} value={text} />
        }
      </div>
    </div>
  );
};

export {LayoutLeftMenuItem};