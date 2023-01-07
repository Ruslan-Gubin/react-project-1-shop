import { icons } from "data";
import { useDragElement } from "hooks";
import React from "react";
import { useDispatch } from "react-redux";
import { gameModalAction } from "store/slice";

import styles from "./ModalGame.module.scss";

interface ModalGameType {
  title: string;
  children: JSX.Element;
}

const FModalGame: React.FC<ModalGameType> = ({ title, children }) => {
  const dispatch = useDispatch();
  const { elementRef, onMouseDown } = useDragElement();

  return (
    <div ref={elementRef} onMouseDown={onMouseDown} className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
          <div className={styles.close}>
            <img
              onClick={() => dispatch(gameModalAction.setModalClose())}
              src={icons.close}
              alt="icons close"
            />
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export const ModalGame = React.memo(FModalGame);
