import React from "react";
import { ButtonMain } from "ui";
import styles from './ModalRemoveItem.module.scss';

interface IModalRemoveItemProps {
  confirm: () => void
  cancel: () => void
  text: string
}

const ModalRemoveItem: React.FC<IModalRemoveItemProps> = ({confirm, cancel, text}) => {

  return (
    <div className={styles.root}>
      <p className={styles.text}>{text}</p>
      <div className={styles.footer}>
      <ButtonMain onClick={confirm} bgColor="red">Подтвердить</ButtonMain>
      <ButtonMain onClick={cancel} bgColor="info">Отмена</ButtonMain>
      </div>
    </div>
  );
};

export { ModalRemoveItem };
