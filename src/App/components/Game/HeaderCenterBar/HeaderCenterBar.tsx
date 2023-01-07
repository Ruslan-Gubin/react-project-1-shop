import React from 'react';
import { useSelector } from 'react-redux';
import { playerApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';
import { iconsGame } from 'data';
import { HeaderIconGame } from '../HeaderIconGame';
import { HeaderNavigate } from '../HeaderNavigate';
import { ResourceBar } from '../ResourceBar';

import styles from './HeaderCenterBar.module.scss';

interface HeaderCenterBarType {

}

const HeaderCenterBar: React.FC<HeaderCenterBarType> = () => {
  const { auth } = useSelector(selectAuth);
  const { data: playerData } = playerApi.useGetPlayerQuery({ id: auth._id });


  return (
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
          icon={String(iconsGame["resourceLink"])}
          link={"/game/resource"}
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
  );
};

export {HeaderCenterBar};