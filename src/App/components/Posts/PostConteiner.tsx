import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../../models/products";
import {
  useCreatePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../../store/post/postApi";
import CustomLink from "../CustomLink";
import PostsItem from "./PostsItem";

interface PostFormAdd {
  post: IPost;
  handlerSubmit: (post: IPost) => void;
}

const PostConteiner = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [createPost, {}] = useCreatePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();

  const postQuery = searchParams.get("post") || "";

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title } as IPost).unwrap();
    setText(""), setTitle("");
  };

  const handletSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target;
    let query = form.search.value;
    setSearchParams({ post: query.toLowerCase() });
    form.search.value = ''
  };

  return (
    <div className="post-main">
    <div className="post-main__forms">

      <div className="post-main__forms-search">
        <form  autoComplete="off" onSubmit={handletSubmitSearch}>
          <input placeholder="Поиск" className="post-main__forms-search-input" type="search" name="search" />
          <input className="post-main__forms-search-submit" type="submit" value="Найти" />
        </form>
      </div>

      <form onSubmit={handlerSubmit}>
        title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <label>
          text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </label>
        <input type="submit" />
      </form>
      </div>

      {isLoading ? <h2>Loading...</h2> : isError}
      {isError && <h2>Error</h2>}
      {data
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (
          <CustomLink key={post._id} to={`/post/${post._id}`}>
            <PostsItem key={post._id} post={post} />
          </CustomLink>
        ))}
    </div>
  );
};

export default PostConteiner;
