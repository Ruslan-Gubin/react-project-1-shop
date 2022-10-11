import React from "react";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../../models/products";
import { CardMainPost, CustomLink } from "../Ui";
import styles from './PostItemsRender.module.scss';

interface IPostItemsRenderProps {
  isError: boolean
  isLoading: boolean
  currentPosts: IPost[] 
}

const PostItemsRender: React.FC<IPostItemsRenderProps> = React.memo((props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  return (
    <>
      {props.isError && <h2>Error</h2>}
      {props.isLoading ? <h2>Loading...</h2> : props.isError}
      {props.currentPosts
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (         
<div className={styles.element} key={post._id}>
          <CustomLink   to={`/post/${post._id}`}>
            <CardMainPost  post={post} />
          </CustomLink>
</div>
        ))}    
    </>
  );
});

export  {PostItemsRender};
