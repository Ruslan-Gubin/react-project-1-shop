import {
  IPlayerType,
  MineType,
  NeedResourceMinesType,
  PlayerResourceBarType,
} from "models/GameType";

type IncomeUpdateType = Record<string, any>;

interface MineUpdatedOptionsType {
    level: number;
    income: number;
    piple: number;
    time: number;
    population: number;
    playerId: string;
    idMine: string;
    resourceBar: {
        wood: number;
        clay: number;
        iron: number;
        wheat: number;
    };
    incomeUpdate: IncomeUpdateType;
}

const mineUpdateObjOptions = (
  value: MineType,
  playerData: IPlayerType ,
  resourceBar: PlayerResourceBarType,
  nextLevelMinesUpdate: NeedResourceMinesType
) => {
 
  
  const incomeUpdate: IncomeUpdateType = {};
  
  for (const key in playerData.income) {
    if (key === value.resorse ) {
      //@ts-ignore-start
      incomeUpdate[key] =  nextLevelMinesUpdate.income + playerData.income[key];
      //@ts-ignore-end
    } else {
      incomeUpdate[key] = playerData.income[key];
    }
  }
  
  const resourceBarCount = {
    wood: resourceBar.wood - nextLevelMinesUpdate.wood,
    clay: resourceBar.clay - nextLevelMinesUpdate.clay,
    iron: resourceBar.iron - nextLevelMinesUpdate.iron,
    wheat: resourceBar.wheat - nextLevelMinesUpdate.wheat,
  };

  const mineUpdatedOptions:MineUpdatedOptionsType = {
    level: nextLevelMinesUpdate.level,
    income: nextLevelMinesUpdate.income,
    piple: nextLevelMinesUpdate.piple,
    time: nextLevelMinesUpdate.time,
    population: nextLevelMinesUpdate.piple - value.piple,
    playerId: playerData._id,
    idMine: value._id,
    resourceBar: resourceBarCount,
    incomeUpdate,
  };
  return { mineUpdatedOptions, resourceBarCount };

};

export { mineUpdateObjOptions };
export type {MineUpdatedOptionsType}