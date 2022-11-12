import { IUser } from "./user";


interface IPost {
  valueTitile: string;
  valueText: string;
  _id: string;
  title: string;
  text: string;
  img: string;
  image: {
    public_id: string
    url: string
  }
  user: IUser;
  viewsCount?: number
  updatedAt?: string
  tags: string[]
}



export type {IPost}