import { MineType } from "models/GameType"


const incomTotalCount = (arr: MineType[] , resouces: string): number | []  => {
  if (!arr.length) {
    return []
  }
  return arr.reduce((acc, item) => item.resouces === resouces ? acc + item.income : acc, 0)
}

export {incomTotalCount}