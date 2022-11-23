import { IUser } from "./user";

interface IComments {
  imageUser?: string;
  userName?: string;
  text: string;
  _id: string
  user: IUser
  likes: string[]
  dislikes: string[]
  __v: number
  updatedAt:string
  target?: {
    category: string
    _id: string 
  }
}

export type {IComments}