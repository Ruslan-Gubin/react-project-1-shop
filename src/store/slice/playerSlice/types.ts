import { MineType, NeedResurceMinesType } from "models/GameType";

interface ResurceBarType extends Record<string, number> {
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
}

interface MineUpdateActiveType {
  status: boolean;
  timeUpdate: number;
  timeStartUpdate: number;
  timeEndUpdate: number;
  mineId: string;
}


interface ResurceSliceInitType {
  lastMinesInfo: MineType;
  nextLevelMinesUpdate: NeedResurceMinesType;
  resurceBar: ResurceBarType;
  mineUpdateActive: MineUpdateActiveType;
  timeAvailableUpdate: number;
}

export type { ResurceBarType, ResurceSliceInitType };
