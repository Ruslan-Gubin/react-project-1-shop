import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../../models/products";
import {
  useCreatePostMutation,
  useDeletePostMutation,
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
  const [searchParams, setSearchParams] = useSearchParams()
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [createPost, {}] = useCreatePostMutation();
  const [deletePost, {}] = useDeletePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();

  const postQuery = searchParams.get('post') || ''

  const handleRemove = async (post: IPost) => {
    await deletePost(post).unwrap();
  };

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

 const handletSubmitSearch:React.FormEventHandler<HTMLFormElement> = (e) => {
e.preventDefault()
const form = e.target

const query = form.search.value

setSearchParams({post: query})

  }

  return (
    <div>
<div>

<form autoComplete="off" onSubmit={handletSubmitSearch}>
<input type="search" name="search" />
<input type="submit" value='Search'/>

</form>

</div>

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
      {data.filter(
        post => post.title.includes(postQuery)
      )
      .map((post) => (
        <CustomLink key={post._id} to={`/post/${post.text}/${post.title}`} >
        <PostsItem remove={handleRemove} key={post._id} post={post} />
        </CustomLink>
        
      ))}
    </div>
  );
};

export default PostConteiner;
