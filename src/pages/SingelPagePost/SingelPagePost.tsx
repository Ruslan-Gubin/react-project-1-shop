import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BlogsItemsCard } from "../../App/components";
import { ButtonGoBack } from "../../App/components/Ui";
import {  useGetOnePostQuery } from "../../store/rtkQuery";

const SingelPagePost = React.memo(() => {
  const {id} = useParams<string>()
  const{ data = [],isError,isLoading} = useGetOnePostQuery({id})

  
  return (
    <div>
      <ButtonGoBack />
      {data && !isLoading && <BlogsItemsCard item={data} id={id} singelPage={true}/>}   
    </div>
  );
});

export { SingelPagePost };
