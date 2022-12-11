import React from "react";
import { icons } from "data";

import styles from "./VisaCard.module.scss";

interface IVisaCard {
  numberCard: string;
  name: string;
  date: string;
}

const VisaCard: React.FC<IVisaCard> = ({ numberCard, name, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>visa</div>
      <img className={styles.simCard} src={icons.simCard} alt="sim card" />
      <div className={styles.numberCard}>{numberCard}</div>
      <div className={styles.footer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export { VisaCard };
