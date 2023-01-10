import { useState, FC, useEffect } from "react";
import { icons, iconsGame } from "data";
import { IPlayerType } from "models/GameType";

import styles from "./AdventuresProggress.module.scss";
import { LayoutMiltyHits } from "../../LayoutMiltyHits";
import { useHoverHits } from "hooks";
import { dateGame } from "utils";

interface AdventuresProggressType {
  playerData: IPlayerType;
  refetch: () => void;
}

const AdventuresProggress: FC<AdventuresProggressType> = ({
  playerData,
  refetch,
}) => {
  const [playerGoAdventure, setPlayerGoAdventure] = useState({
    time: "",
    status: false,
  });
  const [playerGoHome, setPlayerGoHome] = useState({ time: "", status: false });
  const { hover, hoverRef } = useHoverHits();
  const nowDate = Date.now();
  const [endAdventure, setEndAdventure] = useState(false);
  const [playerGoHomeStatus, setPlayerGoHomeStatus] = useState(false);

  useEffect(() => {
    const tick = () => {
      if (playerData.adventure.endTime - nowDate > 0) {
        setPlayerGoAdventure({
          time: dateGame.vievDate(playerData.adventure.endTime - nowDate),
          status: true,
        });
      } else {
        setPlayerGoAdventure({ time: "", status: false });
        setEndAdventure(true);
      }
      if (playerData.adventure.goBackTime - nowDate > 0) {
        setPlayerGoHome({
          time: dateGame.vievDate(playerData.adventure.goBackTime - nowDate),
          status: true,
        });
      } else {
        setPlayerGoHome({ time: "", status: false });
        setPlayerGoHomeStatus(true);
      }
    };
    const timer = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [playerGoAdventure, playerGoHome]);

  useEffect(() => {
    if (endAdventure || playerGoHomeStatus) {
      refetch();
    }
  }, [endAdventure, playerGoHomeStatus]);

  const extraction = playerData.adventure.extraction;
  const hitsExtraction = `
  Дерево ${extraction.wood},
  Глина ${extraction.clay},
  Железо ${extraction.iron},
  Зерно ${extraction.wheat},
  `;

  return (
    <>
      <div ref={hoverRef} className={styles.root}>
        {playerGoAdventure.status && hover && (
          <div className={styles.hitsGoAdventures}>
            <LayoutMiltyHits
              width={300}
              title="Герой идет в путишествие"
              text={playerGoAdventure.time}
            />
          </div>
        )}
        {playerGoHome.status && !playerGoAdventure.status && hover && (
          <div className={styles.hitsGoHome}>
            <LayoutMiltyHits
              width={400}
              title="Герой возвращается домой с добычей"
              text={hitsExtraction}
            />
          </div>
        )}

        <div className={styles.modal}>
          {playerGoHome.status && !playerGoAdventure.status ? (
            <div className={styles.arrowLeft}>
              <img src={icons.arrowLeft} alt="icon arrow" />
            </div>
          ) : (
            <div className={styles.arrowRight}>
              <img src={icons.arrowLeft} alt="icon arrow" />
            </div>
          )}
          <div className={styles.image}>
            <img src={iconsGame["compass"]} alt="icon compass" />
          </div>
          {playerGoAdventure.status ? (
            <span className={styles.time}>{playerGoAdventure.time}</span>
          ) : (
            <span className={styles.time}>{playerGoHome.time}</span>
          )}
        </div>
      </div>
    </>
  );
};

export { AdventuresProggress };
