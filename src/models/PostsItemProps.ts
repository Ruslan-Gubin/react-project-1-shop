import { IPost } from "./products";

export interface PostItemProps {
    post: IPost;
    remove?: any;
    handlerSubmit?: (post: IPost) => void;
  }