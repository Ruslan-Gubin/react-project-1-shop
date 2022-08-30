import { useSearchParams } from "react-router-dom";
import { useGetPostsQuery } from "../../../../store/post/postApi";
import CustomLink from "../../CustomLink";
import CardMainPost from "../../Ui/CardMainPost/CardMainPost";

const PostItemsRender = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);

  const postQuery = searchParams.get("post") || "";

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : isError}
      {isError && <h2>Error</h2>}
      {data
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (


<div className="post-main__items-element">

          <CustomLink  key={post._id} to={`/post/${post._id}`}>
            <CardMainPost key={post._id} post={post} />
          </CustomLink>

</div>
         
          

           
        ))}
    </>
  );
};

export default PostItemsRender;
