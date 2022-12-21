import { MineType } from "models/GameType"


const incomTotalCount = (arr: MineType[] , resurce: string): number => {
  const filterArrName = arr.filter(item => item.resorse === resurce)
  const result = filterArrName.reduce((acc, item) =>  acc + item.income , 0) 
  return result
}

export {incomTotalCount}