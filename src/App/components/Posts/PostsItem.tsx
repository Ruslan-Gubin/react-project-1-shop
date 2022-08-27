import  React, { FC, useState } from "react";
import { PostItemProps } from "../../../models/PostsItemProps";


const PostsItem: FC<PostItemProps> = ({ post}) => {
  const [ status, setStatus] = useState(false)
 
  const handlerOpen = (event: React.MouseEvent) => {
    setStatus( true)
    }
  return (
    <div className="post-item" onClick={handlerOpen}>
       {post.title}
    </div>
  );
};

export default PostsItem;


