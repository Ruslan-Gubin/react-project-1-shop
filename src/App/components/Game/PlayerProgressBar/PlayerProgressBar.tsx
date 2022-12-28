import { iconsGame } from "data";
import React from "react";
import { PlayerProgressBarItem } from "../PlayerProgressBarItem";

import styles from "./PlayerProgressBar.module.scss";

interface PlayerProgressBarType {}

const PlayerProgressBar: React.FC<PlayerProgressBarType> = () => {
  const healthCapasity = 100;
  const healthPlayer = 70;
  const healthProgress = Math.floor((healthPlayer / healthCapasity) * 100);

  const expCapasity = 400;
  const expPlayer = 178;
  const epxProgress = Math.floor((expPlayer / expCapasity) * 100);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <PlayerProgressBarItem
          progress={healthProgress}
          color={"orange"}
          icon={iconsGame["hospital"]}
          title={`Здоровье: ${healthPlayer}`}
          text={`Востановление в день ${15}`}
        />
        <PlayerProgressBarItem
          progress={epxProgress}
          color={"blue"}
          icon={iconsGame["experience"]}
          title={"Опыт"}
          text={`Опыт до следующего уровня ${expPlayer}/${expCapasity}`}
        />
      </div>
    </div>
  );
};

export { PlayerProgressBar };
