import React from "react";
import { useParams } from "react-router-dom";
import { BlogsItemsCard } from "../../App/components";
import PostItemsSinglPage from "../../App/components/PostItemsSinglPage";
import { ButtonGoBack } from "../../App/components/Ui";
import { useGetAuthsQuery, useGetOneAuthQuery, useGetOnePostQuery } from "../../store/rtkQuery";

const SingelPagePost = React.memo(() => {
  const {id} = useParams<string>()
  const{ data = [],isError,isLoading} = useGetOnePostQuery({id})

 


  return (
    <div>
      <ButtonGoBack />
      {/* <PostItemsSinglPage /> */}
      {data && !isLoading && <BlogsItemsCard item={data} singelPage={true}/>}
      
      
    </div>
  );
});

export { SingelPagePost };
