import { PlayerResourceBarType } from "./IPlayerType"

interface MineUpdateLevelBody {
  level: number
  income: number
  piple: number
  time: number
  population: number
  playerId: string
  idMine: string
  resourceBar: PlayerResourceBarType
  resourceBarAfterUpdate: PlayerResourceBarType
}

export type {MineUpdateLevelBody}