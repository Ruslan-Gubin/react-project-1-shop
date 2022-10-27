import { IUser } from "./user";


interface IPost {
  valueTitile: string;
  valueText: string;
  id: string;
  _id: string;
  title: string;
  text: string;
  img: string;
  imageUrl: string
  user: IUser;
  viewsCount?: number
  updatedAt?: string
  tags: string[]
}

export type {IPost}