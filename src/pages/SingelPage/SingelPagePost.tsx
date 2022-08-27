import { useParams } from "react-router-dom";
import { IPost } from "../../models/products";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../../store/post/postApi";
import SinglePagePostItem from "./SinglePagePostItem";

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
            <SinglePagePostItem
              key={post._id}
              post={post}
              remove={handleRemove}
            />
          ))}
    </div>
  );
};

export default SingelPage;
