import React from "react";
import {  useParams, useLocation } from "react-router-dom";
import { BlogsItemsCard, Comments } from "components";
import { ButtonGoBack } from "ui";
import { postApi } from "store/rtkQuery";

import styles from './SingelPagePost.module.scss';


const SingelPagePost = React.memo(() => {
  const {id} = useParams()
  // const {id, data} = useLoaderData()
  const{ data ,isLoading } = postApi.useGetOnePostQuery({id})
  const [addPostComment, {}] = postApi.useAddCommentUpdateMutation()
  const [removePostComment, {}] = postApi.useRemoveCommentUpdateMutation()
  const {pathname} = useLocation()
  const path = pathname.match(/\w+/i)
  const categoryName = path && path[0]


  return (
    <div className={styles.root}>
      <ButtonGoBack />
      {id && data && !isLoading &&  <BlogsItemsCard item={data} id={id} singelPage={true}/>}
      <div className={styles.likes}>
    {id && data && categoryName &&  <Comments target={{_id: id, category: categoryName}} removeCommentTarget={removePostComment} addComment={addPostComment} arrComments={data.comments}/> }  
      </div>
    </div>
  );
});

// const postLoader = async ({request, params}):{id:string,data:IPost} => {
//   console.log({request, params});
//   const id = params.id
//   const res = await fetch(`http://localhost:4444/api/post/${id}`)
//   const data = await res.json()
//   return {id, data}
// }

export { SingelPagePost };

