import { PlayerResurceBarType } from "./IPlayerType"

interface MineUpdateLevelBody {
  level: number
  income: number
  piple: number
  time: number
  population: number
  resurce: string
  incrementIncome: number
  playerId: string
  idMine: string
  resurceBar: PlayerResurceBarType
  resurceBarAfterUpdate: PlayerResurceBarType
}

export type {MineUpdateLevelBody}