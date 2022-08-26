import  React, { FC, useState } from "react";
import { IPost } from "../../../models/products";
import { useUpdatePostMutation } from "../../../store/post/postApi";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
}

const PostsItem: FC<PostItemProps> = ({ post, remove}) => {
  const [updatePost, {}] = useUpdatePostMutation();
  const [ status, setStatus] = useState(false)
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  const handlerOpen = (event: React.MouseEvent) => {
    setStatus( true)
    }


  return (
    <div className="post-item" onClick={handlerOpen}>
      {/* {status && 
      <div>
      <input placeholder={post.text} type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      <input placeholder={post.title} type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <button type='submit'>Update Post</button>
      
      </div>
      } */}
      {post.text}
       {/* {post.title} */}
      <button onClick={()=> remove(post)}>Delete</button>
    </div>
  );
};

export default PostsItem;


