import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../App/components/Modal";
import PostItemsSinglPage from "../../App/components/PostItemsSinglPage";
import InputMain from "../../App/components/Ui/InputMain";
import { IPost } from "../../models/products";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../../store/post/postApi";

const SingelPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [deletePost, {}] = useDeletePostMutation();

  const handleRemove = async (post: IPost) => {
    await deletePost(post).unwrap();
  };

  return (
    <div className="singlpage-container">
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
      {data &&
        data
          .filter((post) => post._id == id)
          .map((post) => (
            <PostItemsSinglPage
            key={post._id}
              post={post}
              remove={handleRemove}
            />
          ))}
    </div>
  );
};

export default SingelPage;
