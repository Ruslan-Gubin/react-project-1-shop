import { MineType } from "models/GameType"


const incomTotalCount = (arr: MineType[] , resource: string): number => {
  const filterArrName = arr.filter(item => item.resorse === resource)
  const result = filterArrName.reduce((acc, item) =>  acc + item.income , 0) 
  return result
}

export {incomTotalCount}