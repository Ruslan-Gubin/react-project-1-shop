import { MineType, NeedResurceMinesArrType, NeedResurceMinesType} from "models/GameType";

type ObjGenericType = Record<string, string>;

const objTest: ObjGenericType = { value: "Ruslan", age: "20" };


const getValue = <T extends object, U extends keyof T, C extends keyof U>(
  obj: T,
  prop: U,
  level: C
): NeedResurceMinesType => {
  const map = obj[prop];
  const res = (map as Array<NeedResurceMinesType>).find(
    (item) => item.level === level
  );
  if (res) {
    return res;
  } else {
    throw new Error("Mine next level undefined");
  }
};

// const getKey = <T extends object, U extends keyof T>(obj: T, value: T[U]): U|null => {
//   const key = (Object.keys(obj) as Array<U>).find(item => obj[item] === value)
//   return key || null
// }



const findNextLevelResurce = <
  T extends object,
  U extends keyof T,
  C extends keyof U
>(
  object: T,
  resurce: U,
  level: C
) => {
  const res = getValue(object, resurce, level);
  return res;
};

const checkResorsUpdate = <T>( mine: MineType, resurceBar: T, resurceUpdateRuls: NeedResurceMinesArrType): boolean => {
  const resurce = mine.resorse;
  const level = mine.level + 1;

  const nextResurseUpdate = getValue(resurceUpdateRuls, resurce, level);

  for (const key in resurceBar) {
      if (Number( resurceBar[key]) < Number(nextResurseUpdate[key])) {
        return false;
      }
  }

  return true;
};

export { checkResorsUpdate, findNextLevelResurce };

