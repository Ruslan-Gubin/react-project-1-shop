import { iconsGame } from "data";
import React from "react";
import { ButtonGame } from "../ButtonGame";

import styles from "./AdventuresInfo.module.scss";

interface AdventuresInfoType {
  title: string;
  adventureActive: (value: {compasCost: number, adventureTime: string, timeMs: number}) => void;
}

const AdventuresInfo: React.FC<AdventuresInfoType> = ({
  title,
  adventureActive,
}) => {
  const checkTitle = title === "Короткое приключение";

  const adventureData = {
    compasCost: checkTitle ? 1 : 2,
    adventureTime: checkTitle ? "00:08:00" : "01:04:16",
    timeMs: checkTitle ? 480000 : 3600000,
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="https://res.cloudinary.com/ds289tkqj/image/upload/v1673091553/Game/adventures-3726_buosh9.jpg"
            alt="img adventures"
          />
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
        </div>
        <div className={styles.body}>
          {checkTitle ? (
            <p>
              Путешественник отправляет твоего героя исследовать мир Игры, где
              можно найти ценные вещи. Чем выше сила героя, тем меньше здоровья
              он потеряет.
            </p>
          ) : (
            <p>
              Длинное приключение требует больше времени. В нем твой герой
              найдет в два раза больше ценных вещей, чем в коротком приключении,
              но оно также нанесет двойной урон его здоровью.
            </p>
          )}
          <div className={styles.timeAdventure}>
            <img src={iconsGame["clock"]} alt="icon clock" />
            <span>{adventureData.adventureTime}</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.count}>
            <p>Стоит :</p>
            <img src={iconsGame["compassAdventure"]} alt="icon compass" />
            <span> x {adventureData.compasCost}</span>
          </div>
          <div className={styles.button}>
            <ButtonGame onClick={() => adventureActive(adventureData)}>
              Начать приключение
            </ButtonGame>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdventuresInfo };
