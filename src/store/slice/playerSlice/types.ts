import { MineType, NeedResourceMinesType } from "models/GameType";

interface ResourceBarType extends Record<string, number> {
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


interface ResourceSliceInitType {
  lastMinesInfo: MineType;
  nextLevelMinesUpdate: NeedResourceMinesType;
  resourceBar: ResourceBarType;
  mineUpdateActive: MineUpdateActiveType;
  timeAvailableUpdate: number;
}

export type { ResourceBarType, ResourceSliceInitType };
