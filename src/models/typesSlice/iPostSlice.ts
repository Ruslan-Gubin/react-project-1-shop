import { IPost } from "../IPost";


interface IgreatePost {
  text: string;
  title: string;
  imageUrl: string;
  tags: string;
}

interface IinitialStatePosts {
  createPost: IgreatePost;
  posts: IPost[];
  searchValue: string;
}

export type { IinitialStatePosts };
