import { IUser } from "models/user";
import { MineType } from "./MineType";

type ObjectType = Record<string, number>;

interface PlayerResourceBarType extends ObjectType {
  wood: number;
  clay: number;
  iron: number;
  wheat: number;
}

interface InventoryPlayerType {
  bonus: string;
  image: string;
  name: string;
  purpose: string;
  status: boolean;
  cell: number;
  order: number;
  _id: string;
}

interface AdventureType {
  status: boolean;
  extraction: PlayerResourceBarType;
  startTime: number;
  endTime: number;
  goBackTime: number;
}

interface IPlayerType {
  _id: string;
  updatedAt: string;
  createdAt?: string;
  user: IUser;
  nameSity: string;
  population: number;
  resourceBar: PlayerResourceBarType;
  capasity: PlayerResourceBarType;
  income: PlayerResourceBarType;
  mines: MineType[];
  inventory: InventoryPlayerType[];
  compass: number;
  health: number;
  adventureStatus: boolean;
  level: number;
  experience: number;
  adventure: AdventureType;
}

export type { IPlayerType, PlayerResourceBarType, InventoryPlayerType };
