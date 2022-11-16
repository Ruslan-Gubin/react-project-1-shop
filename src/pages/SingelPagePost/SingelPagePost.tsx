import React from "react";
import { useParams } from "react-router-dom";
import { BlogsItemsCard, Comments } from "components";
import { ButtonGoBack } from "ui";
import { postApi } from "store/rtkQuery";

const SingelPagePost = React.memo(() => {
  const {id} = useParams()
  const{ data ,isLoading} = postApi.useGetOnePostQuery({id})
  const [addPostComment, {}] = postApi.useAddCommentUpdateMutation()
  const [removePostComment, {}] = postApi.useRemoveCommentUpdateMutation()
 

  return (
    <div>
      <ButtonGoBack />
      {id && data && !isLoading && <BlogsItemsCard item={data} id={id} singelPage={true}/>}
    {id && data &&  <Comments idTarget={id} removeCommentTarget={removePostComment} addComment={addPostComment} arrComments={data.comments}/> }  
    </div>
  );
});

export { SingelPagePost };
