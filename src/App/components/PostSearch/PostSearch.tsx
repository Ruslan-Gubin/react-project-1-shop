import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonMain, InputMain, FormSearch } from "../Ui";

const PostSearch = React.memo(() => {
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target;
    let query = form.search.value;
    setSearchParams({ post: query.toLowerCase() });
    form.search.value = "";
  };

  return (
    <FormSearch
      name="search"
      placeholder="Поиск"
      submitImput={handlerSubmitSearch}
    >
      <InputMain
        value={title}
        onChange={(value) => setTitle(value)}
        placeholder="Поиск"
      />
      <ButtonMain bgColor="green">Найти</ButtonMain>
    </FormSearch>
  );
});

export  {PostSearch};
