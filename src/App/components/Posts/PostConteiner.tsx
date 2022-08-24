import { ReactComponentElement, useEffect, useState } from "react";
import { IPost } from "../../../models/products";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../../store/post/postApi";
import PostsItem from "./PostsItem";

interface PostFormAdd {
  post: IPost;
  handlerSubmit: (post: IPost) => void;
}

const PostConteiner = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { isLoading, isError, data = [] } = useGetPostsQuery(3);
  const [createPost, {}] = useCreatePostMutation();
  const [deletePost, {}] = useDeletePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();

  const handleRemove = async (post: IPost) => {
    await deletePost(post);
  };

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  const handlerSubmit = async (event: any) => {
    event.preventDefault();
    await createPost({ text, title } as IPost);
    setText(""), setTitle("");
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>
          title:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          text:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      {isLoading ? <h2>Loading...</h2> : isError}
      {isError && <h2>Error</h2>}
      {data.map((post) => (
        <PostsItem
          remove={handleRemove}
          update={handleUpdate}
          key={post._id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostConteiner;
