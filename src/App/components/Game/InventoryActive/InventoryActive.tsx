import { useHoverHits } from 'hooks';
import { InventoryPlayerType } from 'models/GameType';
import React from 'react';
import { LayoutMiltyHits } from '../LayoutMiltyHits';

import styles from './InventoryActive.module.scss';

interface InventoryActiveType {
  inventory: InventoryPlayerType
handlerActiveInventary: (data: InventoryPlayerType) => void
}

const FInventoryActive: React.FC<InventoryActiveType> = ({inventory, handlerActiveInventary}) => {
  const {hover, hoverRef} = useHoverHits();

  return (
    <div  ref={hoverRef} className={styles.root}>
      <img onClick={() => handlerActiveInventary(inventory)} src={inventory.image} alt="cell image" />
   <span>
    {inventory.purpose}
   </span>
      {hover && 
        <div className={styles.hits}>
            <LayoutMiltyHits title={inventory.name} text={inventory.bonus} />
       </div>
      }
  
    </div>
  );
};

export const InventoryActive = React.memo(FInventoryActive);