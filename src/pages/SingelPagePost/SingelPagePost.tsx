import React from "react";
import { useParams } from "react-router-dom";
import { BlogsItemsCard } from "../../App/components";
import { ButtonGoBack } from "../../App/components/Ui";
import { postApi } from "../../store/rtkQuery";

const SingelPagePost = React.memo(() => {
  const {id} = useParams<string>()
  const{ data = [],isLoading} = postApi.useGetOnePostQuery({id})


  return (
    <div>
      <ButtonGoBack />
      {id && data && !isLoading && <BlogsItemsCard item={data} id={id} singelPage={true}/>}   
    </div>
  );
});

export { SingelPagePost };
