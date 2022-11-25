import type { IPost } from "models/iPost";

interface IinitialStatePosts {
  page: number
  perpage: number
  tags: string
  search: string
  searchUSer: string
  category: string
  postUpdate: IPost 
  searchValueActive: string
}

export type {IinitialStatePosts}