import { IPost } from "models/iPost"
import { IUser } from "models/user"

interface IFPosts {
  userId: string | undefined
  userTarger: IUser
  userPosts: IPost[]
  totalLength: number
  globalSearchPosts: IPost[]
}

export type {IFPosts}