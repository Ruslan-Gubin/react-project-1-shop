import { minesArr, resurceUpdateRuls } from 'data';
import { MinesBlock, ResurceInfo } from 'game';
import { MineType } from 'models/GameType';
import React from 'react';
import { findNextLevelResurce } from 'utils';
import { checkResurce } from 'utils/checkResorsUpdate';

import styles from './GameResurce.module.scss';

const GameResurce: React.FC = () => {
  const [mineInfo, setMineInfo] = React.useState(minesArr[0])
  const [nextLevelMineUpdate, setNextLevelMineUpdate] = React.useState<checkResurce>({wood:0,iron:0,clay:0,wheat:0,time:0,piple:0,level:0})

  const handlerIronValue = (value: MineType) => {
    const resource = value.resorse
    const level = value.level
    const resurceNeedUpdate = findNextLevelResurce(resurceUpdateRuls,resource, level+1)   
    setNextLevelMineUpdate(resurceNeedUpdate)
       setMineInfo(value)
  }

  const handlerClickCircle = (value: MineType) => {
    console.log(value);
  }


  return (
    <div className={styles.root}>
      {mineInfo && 
      <ResurceInfo nextLevelMineUpdate={nextLevelMineUpdate} minesInfo={mineInfo} />
      }
      {mineInfo &&

      <MinesBlock minesArray={minesArr} handlerClickCircle={handlerClickCircle}  handlerIronValue={handlerIronValue} mineInfo={mineInfo}/>
      }
    </div>
  );
};

export {GameResurce};