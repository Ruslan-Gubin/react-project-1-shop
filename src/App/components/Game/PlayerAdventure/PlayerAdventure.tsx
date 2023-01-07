import React from "react";
import { useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { selectAuth, selectPlayer } from "store/slice";
import { AdventuresCard, AdventuresInfo, PointsAdventures } from "../UiGame";

import styles from "./PlayerAdventure.module.scss";

interface PlayerAdventureType {}

const PlayerAdventure: React.FC<PlayerAdventureType> = () => {
  const { resourceBar } = useSelector(selectPlayer);
  const { auth } = useSelector(selectAuth);
  const { data: playerData, isLoading } = playerApi.useGetPlayerQuery({
    id: auth._id,
  });
  const [adventure, {}] = playerApi.useActiveAdventureMutation();
  const [adventuresActive, setAdventuresActive] = React.useState<{
    numberCard: number;
    title: string;
  }>({ numberCard: 1, title: "Короткое приключение" });

  const handleCardActive = (value: { numberCard: number; title: string }) => {
    setAdventuresActive(() => {
      return { numberCard: value.numberCard, title: value.title, resourceBar };
    });
  };

  const handlerAdventure = async (adventureData: {
    compasCost: number;
    adventureTime: string;
    timeMs: number;
  }) => {
    const { adventureTime, ...rest } = adventureData;

    await adventure({...rest, resourceBar}); 
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
          {playerData && !isLoading && (
            <PointsAdventures compassCount={playerData.compass} />
          )}
        </div>
        <div className={styles.adventuresInfo}>
          <AdventuresInfo
            adventureActive={handlerAdventure}
            title={adventuresActive.title}
          />
        </div>
      </div>
    </div>
  );
};

export { PlayerAdventure };
