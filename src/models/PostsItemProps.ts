import { IPost } from "./products";

export interface PostItemProps {
    post: IPost;
    remove?: (post: IPost) => void;
    handlerSubmit?: (post: IPost) => void;
  }