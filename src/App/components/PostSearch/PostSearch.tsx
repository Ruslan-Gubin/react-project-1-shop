import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonMain, InputMain } from "../Ui";
import FormSearch from "../Ui/FormSearch";

const PostSearch = () => {
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
        setText={setTitle}
        name="search"
        placeholder="Поиск"
      />
      <ButtonMain bgColor="green">Найти</ButtonMain>
    </FormSearch>
  );
};

export  {PostSearch};
