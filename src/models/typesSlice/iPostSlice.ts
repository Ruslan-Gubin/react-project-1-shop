import { IPost } from "../products"

interface IinitialStatePosts {
  posts: IPost[]
  tags: string[] 
  searchValue: string
}

export type {IinitialStatePosts}