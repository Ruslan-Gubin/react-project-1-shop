import { IPlayerType } from "models/GameType";
import React from "react";
import { playerApi } from "store/rtkQuery";
import { AdventuresCard, AdventuresInfo, PointsAdventures } from "../UiGame";

import styles from "./PlayerAdventure.module.scss";

interface PlayerAdventureType {
  playerData:IPlayerType
  refetch: () => void
}

const PlayerAdventure: React.FC<PlayerAdventureType> = ({playerData, refetch}) => {
  const [adventure, {}] = playerApi.useActiveAdventureMutation();
  const [adventuresActive, setAdventuresActive] = React.useState<{
    numberCard: number;
    title: string;
  }>({ numberCard: 1, title: "Короткое приключение" });

  const handleCardActive = (value: { numberCard: number; title: string }) => {
    setAdventuresActive(() => {
      return { numberCard: value.numberCard, title: value.title };
    });
  };

  const handlerAdventure = async (adventureData: {
    compassCost: number;
    adventureTime: string;
    timeMs: number;
  }) => {
    if (playerData && playerData.compass < adventureData.compassCost) {
      return false
    } 
    if (playerData) {
    const { adventureTime, ...rest } = adventureData;
     return await adventure({...rest,  playerId: playerData?._id})
      .unwrap()
      .then(() => {})
      .catch((error) => console.error(error)) 
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.adventuresLinks}>
          <AdventuresCard
            numberCard={1}
            numberActive={adventuresActive.numberCard}
            title={"Короткое приключение"}
            handleCardActive={handleCardActive}
          />
          <AdventuresCard
            numberCard={2}
            numberActive={adventuresActive.numberCard}
            title={"Длинное приключение"}
            handleCardActive={handleCardActive}
          />
          {playerData &&  (
            <PointsAdventures compassCount={playerData.compass} />
          )}
        </div>
        <div className={styles.adventuresInfo}>
          {playerData && 
          <AdventuresInfo
          compassState={playerData.compass !== 0}
          adventureStatus={playerData.adventure.status}
          adventureActive={handlerAdventure}
          title={adventuresActive.title}
          />
        }
        </div>
      </div>
    </div>
  );
};

export { PlayerAdventure };
