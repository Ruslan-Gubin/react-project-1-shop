interface NeedResurceBuildType extends Record<string, number> {
  level: number;
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
  time: number;
}

interface NeedResurceMinesType extends NeedResurceBuildType {
  piple: number;
  income: number;
}

interface NeedResurceWarhousType extends NeedResurceBuildType {
  capasity: number;
  piple: number;
}

interface NeedResurceMinesArrType
  extends Record<string, Array<NeedResurceMinesType>> {}

export type {
  NeedResurceMinesType,
  NeedResurceWarhousType,
  NeedResurceMinesArrType,
};
