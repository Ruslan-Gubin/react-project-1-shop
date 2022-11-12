import { IUser } from "./user"

interface Icomments {
  text: string
  user: IUser
  likes: number
  _id: string
  createdAt:string
  updatedAt: string
  __v: number
}

export type {Icomments}