import {
  IPlayerType,
  MineType,
  NeedResurceMinesType,
  PlayerResurceBarType,
} from "models/GameType";
import { calculateResurceBarUpdate } from "utils";

type IncomeUpdateType = Record<string, any>;

const mineUpdateObjOptions = (
  value: MineType,
  playerData: IPlayerType ,
  resurceBar: PlayerResurceBarType,
  nextLevelMinesUpdate: NeedResurceMinesType
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
  
  const resurceBarCount = {
    wood: resurceBar.wood - nextLevelMinesUpdate.wood,
    clay: resurceBar.clay - nextLevelMinesUpdate.clay,
    iron: resurceBar.iron - nextLevelMinesUpdate.iron,
    wheat: resurceBar.wheat - nextLevelMinesUpdate.wheat,
  };

  const mimeUpdatedOptions = {
    level: nextLevelMinesUpdate.level,
    income: nextLevelMinesUpdate.income,
    piple: nextLevelMinesUpdate.piple,
    time: nextLevelMinesUpdate.time,
    population: nextLevelMinesUpdate.piple - value.piple,
    playerId: playerData._id,
    idMine: value._id,
    resurceBar: resurceBarCount,
    resurceBarAfterUpdate: {
      wood: calculateResurceBarUpdate(
        resurceBarCount.wood,
        playerData.income.wood,
        nextLevelMinesUpdate.time,
        playerData.capasity.wood
        ),
        clay: calculateResurceBarUpdate(
        resurceBarCount.clay,
        playerData.income.clay,
        nextLevelMinesUpdate.time,
        playerData.capasity.clay
      ),
      iron: calculateResurceBarUpdate(
        resurceBarCount.iron,
        playerData.income.iron,
        nextLevelMinesUpdate.time,
        playerData.capasity.iron
      ),
      wheat: calculateResurceBarUpdate(
        resurceBarCount.wheat,
        playerData.income.wheat,
        nextLevelMinesUpdate.time,
        playerData.capasity.wheat
      ),
    },
    incomeUpdate,
  };
  return { mimeUpdatedOptions, resurceBarCount };

};

export { mineUpdateObjOptions };
