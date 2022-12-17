import { resurceUpdateRulsType } from "data/updateRules";
import { MineType } from "models/GameType";

interface checkResurce {
  wood: number;
  clay:  number;
  iron:  number;
  wheat:  number;
  time: number
  piple: number
  level: number
  income: number
} 

const findNextLevelResurce = (object: any, resurce: string, level:number):checkResurce => {
  let targetUpdate = { wood: 0, clay: 0, iron: 0, wheat: 0, piple: 0, income: 0, time: 0, level: 0};

  for (const key in object) {
    if (key === resurce) {
      const resurceArr = object[key];
      const target =
        resurceArr && resurceArr.find((item:checkResurce) => item.level === level);
      
      if (target) {
        targetUpdate = {
          ...target
        };
      }
    }
  }
  
  return targetUpdate 

}

const checkResorsUpdate = ( mine: MineType, resurceBarCount: checkResurce, resurceUpdateRuls: resurceUpdateRulsType): boolean => {
  const resurce = mine.resorse;
  const level = mine.level + 1;

  const nextResurseUpdate = findNextLevelResurce(resurceUpdateRuls, resurce, level)

  for (const key in resurceBarCount) {
    if (resurceBarCount[key] < nextResurseUpdate[key]) {
      return false;
    }
  }

  return true;
};


export { checkResorsUpdate, findNextLevelResurce };

export type {checkResurce}