import { iconsGame } from "data";
import React from "react";
import { levelCheckNextUp } from "utils";
import { PlayerProgressBarItem } from "../PlayerProgressBarItem";

import styles from "./PlayerProgressBar.module.scss";

interface PlayerProgressBarType {
  health: number;
  experience: number;
  playerLevel: number;
}

const PlayerProgressBar: React.FC<PlayerProgressBarType> = ({health, experience, playerLevel}) => {
  const healthProgress = Math.floor((health / 100) * 100);
  const epxProgress = Math.floor((experience / levelCheckNextUp(playerLevel)) * 100);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <PlayerProgressBarItem
          progress={healthProgress}
          color={"orange"}
          icon={iconsGame["hospital"]}
          title={`Здоровье: ${health}`}
          text={`Востановление в день ${15}`}
        />
        <PlayerProgressBarItem
          progress={epxProgress}
          color={"blue"}
          icon={iconsGame["experience"]}
          title={"Опыт"}
          text={`Опыт до следующего уровня ${experience}/${levelCheckNextUp(playerLevel)}`}
        />
      </div>
    </div>
  );
};

export { PlayerProgressBar };
