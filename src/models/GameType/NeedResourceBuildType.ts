interface NeedResourceBuildType extends Record<string, number> {
  level: number;
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
  time: number;
}

interface NeedResourceMinesType extends NeedResourceBuildType {
  piple: number;
  income: number;
}

interface NeedResourceWarhousType extends NeedResourceBuildType {
  capasity: number;
  piple: number;
}

interface NeedResourceMinesArrType
  extends Record<string, Array<NeedResourceMinesType>> {}

export type {
  NeedResourceMinesType,
  NeedResourceWarhousType,
  NeedResourceMinesArrType,
};
