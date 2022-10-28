import { IPost } from "../../../models/iPost";


interface IinitialStatePosts {
  menuValue: string
  posts: IPost[];
  searchValue: string;
  tags: string[];
  tagsSearchValue: string
}

export type {IinitialStatePosts}