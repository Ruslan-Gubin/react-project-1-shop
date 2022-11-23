import { IUser } from "./user";

interface IDialog {
  _id: string
  userOne: IUser
  userTwo: IUser
  comments: string[]
  __v: number
  updatedAt:string
}

export type {IDialog}