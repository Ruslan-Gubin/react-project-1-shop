import React from "react";
import { ButtonMain } from "../Ui";
import styles from './ModalRemoveItem.module.scss';

interface IModalRemoveItemProps {
  confirm: () => void
  cancel: () => void
}

const ModalRemoveItem: React.FC<IModalRemoveItemProps> = ({confirm, cancel}) => {

  return (
    <div className={styles.root}>
      <p>Вы действительно хотите удалить этот товар?</p>
      <div className={styles.footer}>
      <ButtonMain onClick={confirm} bgColor="red">Удалить</ButtonMain>
      <ButtonMain onClick={cancel} bgColor="info">Отмена</ButtonMain>
      </div>
    </div>
  );
};

export { ModalRemoveItem };
