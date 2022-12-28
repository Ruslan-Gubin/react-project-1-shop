import React from "react";
import { iconsGame } from "data";
import { useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { HeaderIconGame } from "../HeaderIconGame";
import { ResourceBar } from "../ResourceBar";

import styles from "./GameHeader.module.scss";
import { HeaderNavigate } from "../HeaderNavigate";
import { HeaderMenuLeft } from "../HeaderMenuLeft";
import { HeaderMenuRight } from "../HeaderMenuRight";

const GameHeader: React.FC = () => {
  const { auth } = useSelector(selectAuth);
  const { data: playerData } = playerApi.useGetPlayerQuery({ id: auth._id });

  return (
    <div className={styles.headerOption}>
      <div className={styles.root}>
        <div className={styles.headerMenuLeft}>
          <HeaderMenuLeft />
        </div>

        <div className={styles.center}>
          <div className={styles.centerLinkMenu}>
            {playerData && (
              <div className={styles.headerIconsLeft}>
                <HeaderIconGame
                  icon={iconsGame["helmet"]}
                  value={0}
                  text={"Войска: потребление"}
                />
                <HeaderIconGame
                  icon={iconsGame["population"]}
                  value={playerData.population}
                  text={"Население: потребление"}
                />
              </div>
            )}
            <div className={styles.navigate}>
              <HeaderNavigate
                icon={String(iconsGame["settlement"])}
                link={"/game"}
                text={"Город"}
              />
              <HeaderNavigate
                icon={String(iconsGame["resurceLink"])}
                link={"/game/resurce"}
                text={"Ресурсы"}
              />
            </div>
            {playerData && (
              <div className={styles.headerIconsRight}>
                <HeaderIconGame
                  icon={iconsGame["silver"]}
                  value={0}
                  text={"Аукцион"}
                />
                <HeaderIconGame
                  icon={iconsGame["gold"]}
                  value={0}
                  text={"Функции золота"}
                />
              </div>
            )}
          </div>
          <div className={styles.resourceBar}>
            {playerData && <ResourceBar playerData={playerData} />}
          </div>
        </div>

        <div className={styles.headerMenuRight}>
          <HeaderMenuRight />
        </div>
      </div>
    </div>
  );
};

export { GameHeader };
