import { FC } from "react";
import { IPost } from "../../../models/products";
import {
  ModalActiveUtils,
  PostItemsRender,
  PostSearchUtils,
} from "./PostContairerUtils";

interface PostFormAdd {
  post?: IPost;
  handlerSubmit?: () => void;
  closeForm?: () => void;
  setText?: string;
  search?: any;
}

const PostConteiner: FC<PostFormAdd> = () => {
  return (
    <div className="post-main">
      <div className="post-main__forms">
        <PostSearchUtils />
        <ModalActiveUtils />
      </div>
      <div className="post-main__items">
  
      <PostItemsRender />



      </div>
    </div>
  );
};

export default PostConteiner;
