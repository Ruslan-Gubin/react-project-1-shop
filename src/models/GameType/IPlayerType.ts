import { IUser } from "models/user";
import { MineType } from "./MineType";

type ObjectType = Record<string, number>

interface PlayerResurceBarType extends ObjectType {
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
}

interface IPlayerType {
  _id: string;
  updatedAt: string
  createdAt?: string
  user: IUser;
  nameSity: string;
  population: number;
  resourceBar: PlayerResurceBarType;
  capasity: PlayerResurceBarType;
  income: PlayerResurceBarType;
  mines: MineType[];
}

export type { IPlayerType , PlayerResurceBarType};
