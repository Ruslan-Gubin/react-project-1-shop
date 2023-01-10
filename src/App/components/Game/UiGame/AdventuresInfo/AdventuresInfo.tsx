import { iconsGame } from "data";
import React from "react";
import { ButtonGame } from "../ButtonGame";

import styles from "./AdventuresInfo.module.scss";

interface AdventuresInfoType {
  compassState: boolean
  title: string;
  adventureActive: (value: {compassCost: number, adventureTime: string, timeMs: number}) => void;
  adventureStatus: boolean
}

const AdventuresInfo: React.FC<AdventuresInfoType> = ({
  compassState,
  title,
  adventureActive,
  adventureStatus,
}) => {
  const checkTitle = title === "Короткое приключение";

  const adventureData = {
    compassCost: checkTitle ? 1 : 2,
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
          {!adventureStatus ?
            <>
            <img src={iconsGame["clock"]} alt="icon clock" />
            <span>{adventureData.adventureTime}</span>
          </>
            : <span>Идет приключение...</span>
          }
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.count}>
            <p>Стоит :</p>
            <img src={iconsGame["compassAdventure"]} alt="icon compass" />
            <span> x {adventureData.compassCost}</span>
          </div>
          <div className={styles.button}>
            <ButtonGame disabled={adventureStatus || !compassState} onClick={() => adventureActive(adventureData)}>
              Начать приключение
            </ButtonGame>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AdventuresInfo };
