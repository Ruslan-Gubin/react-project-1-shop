import React from "react";
import { useDispatch } from "react-redux";
import { gameModalAction } from "store/slice";
import { PlayerOptionsModalType } from "store/slice/gameModalSlice/types";

import styles from "./AccordionModal.module.scss";

interface AccordionModalType {
  links: PlayerOptionsModalType[]
  children: JSX.Element
}

const AccordionModal: React.FC<AccordionModalType> = ({links, children}) => {
  const dispatch = useDispatch()

  const handlerActiveLink = (item: PlayerOptionsModalType) => {
    dispatch(gameModalAction.linkOptionsActive({value: item.value}))
  }

  const handlerMouseDown = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
    onMouseDown={(e) => handlerMouseDown(e)}
    className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.links}>
            {links.map(item => (
            <div 
            onClick={() => handlerActiveLink(item)}
            key={item.id} 
            className={item.status ? `${styles.lindItemContainer} ${styles.linkActive}` : styles.lindItemContainer}>
              <div className={styles.linkItem}>{item.value}</div>
            </div>  
            ))
            }
          </div>
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};

export { AccordionModal };
