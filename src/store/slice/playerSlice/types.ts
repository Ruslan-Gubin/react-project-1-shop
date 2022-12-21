import { IPlayerType, MineType, NeedResurceMinesType } from "models/GameType";

interface ResurceBarType extends Record<string, number> {
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
}

interface ResurceSliceInitType  {
  player: IPlayerType;
  lastMinesInfo: MineType;
  nextLevelMinesUpdate: NeedResurceMinesType;
  resurceBar: ResurceBarType;
}

export type { ResurceBarType, ResurceSliceInitType };
