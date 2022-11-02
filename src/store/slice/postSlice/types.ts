import type { IPost } from "../../../models/iPost";

interface IinitialStatePosts {
  page: number
  perpage: number
  tags: string
  search: string
  category: string
  postUpdate: IPost | string
}

export type {IinitialStatePosts}