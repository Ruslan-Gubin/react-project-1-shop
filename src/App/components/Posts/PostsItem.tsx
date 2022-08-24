import  React, { FC } from "react";
import { IPost } from "../../../models/products";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostsItem: FC<PostItemProps> = ({ post, remove, update }) => {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }
  const handleUpdate = (event: React.MouseEvent) => {
    const title = ''
    update({...post, title})
  }

  return (
    <div className="post-item" onClick={handleUpdate}>
      {post.text} {post.title}
      <button onClick={()=> remove(post)}>Delete</button>
    </div>
  );
};

export default PostsItem;


