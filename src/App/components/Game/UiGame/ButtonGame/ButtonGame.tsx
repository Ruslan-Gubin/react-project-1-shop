import React from "react";

import styles from "./ButtonGame.module.scss";

interface ButtonGameType {
  children?: React.ReactNode;
  width?: number
  onClick: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

const ButtonGame: React.FC<ButtonGameType> = ({ children, width, onClick, type , disabled }) => {

  return (
    <div style={{ width: width }} className={styles.root}>
      <div className={styles.container}>
      <button
      disabled={disabled}
      type={type ? type : 'button'}
      onClick={onClick}
      className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}
      >{children}</button>
      </div>
    </div>
  );
};

export { ButtonGame };
