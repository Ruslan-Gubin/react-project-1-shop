import { useSearchParams } from "react-router-dom";
import CustomLink from "../../CustomLink";
import CardMainPost from "../../Ui/CardMainPost/CardMainPost";

const PostItemsRender = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  return (
    <>
      {props.isError && <h2>Error</h2>}
      {props.isLoading ? <h2>Loading...</h2> : props.isError}
      {props.currentPosts
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (         
<div className="post-main__items-element" key={post._id}>
          <CustomLink   to={`/post/${post._id}`}>
            <CardMainPost  post={post} />
          </CustomLink>
</div>
        ))}    
    </>
  );
};

export default PostItemsRender;
