import { iconsGame } from "data";
import React from "react";
import { BuildingQueueItem } from "../BuildingQueueItem";

import styles from "./BuildingQueueSlots.module.scss";

interface BuildingQueueSlotsType {}

const BuildingQueueSlots: React.FC<BuildingQueueSlotsType> = () => {

  return (
    <div className={styles.root}>
        <BuildingQueueItem  icons={iconsGame["scales"]} title={'Рынок'} text={'здание еще не построено'}/>
        <BuildingQueueItem  icons={iconsGame["whiteHelmet"]} title={'Казарма'} text={'здание еще не построено'}/>
        <BuildingQueueItem  icons={iconsGame["whiteHorse"]} title={'Конюшня'} text={'здание еще не построено'}/>
        <BuildingQueueItem  icons={iconsGame["workshop"]} title={'Мастерская'} text={'здание еще не построено'}/>
        <BuildingQueueItem  icons={iconsGame["circus"]} title={'Целебный шатер'} text={'здание еще не построено'}/>
    </div>
  );
};

export { BuildingQueueSlots };
