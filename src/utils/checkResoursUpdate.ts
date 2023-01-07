import { MineType, NeedResourceMinesArrType, NeedResourceMinesType} from "models/GameType";

// type ObjGenericType = Record<string, string>;

// const objTest: ObjGenericType = { value: "Ruslan", age: "20" };


const getValue = <T extends object, U extends keyof T, C extends keyof U>(
  obj: T,
  prop: U,
  level: C
): NeedResourceMinesType => {
  const map = obj[prop];
  const res = (map as Array<NeedResourceMinesType>).find(
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



const findNextLevelResource = <
  T extends object,
  U extends keyof T,
  C extends keyof U
>(
  object: T,
  resource: U,
  level: C
) => {
  const res = getValue(object, resource, level);
  return res;
};

const checkResorsUpdate = <T>( mine: MineType, resourceBar: T, resourceUpdateRuls: NeedResourceMinesArrType): boolean => {
  const resource = mine.resorse;
  const level = mine.level + 1;

  const nextResurseUpdate = getValue(resourceUpdateRuls, resource, level);

  for (const key in resourceBar) {
      if (Number( resourceBar[key]) < Number(nextResurseUpdate[key])) {
        return false;
      }
  }

  return true;
};

export { checkResorsUpdate, findNextLevelResource };

