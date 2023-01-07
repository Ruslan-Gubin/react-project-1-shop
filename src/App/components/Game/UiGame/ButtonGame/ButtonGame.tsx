import React from "react";

import styles from "./ButtonGame.module.scss";

interface ButtonGameType {
  children?: React.ReactNode;
  width?: number
  onClick: () => void
  type?: "button" | "submit" | "reset"
}

const ButtonGame: React.FC<ButtonGameType> = ({ children, width, onClick, type }) => {

  return (
    <div style={{ width: width }} className={styles.root}>
      <div className={styles.container}>
      <button
      type={type ? type : 'button'}
      onClick={onClick}
      >{children}</button>
      </div>
    </div>
  );
};

export { ButtonGame };
