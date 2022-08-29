import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ButtonMain from "../../Ui/ButtonMain";
import FormSearch from "../../Ui/FormSearch";
import InputMain from "../../Ui/InputMain";

const PostSearchUtils = () => {
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handletSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
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
      submitImput={handletSubmitSearch}
    >
      <InputMain
        autoComplete="on"
        required={true}
        setText={setTitle}
        name="search"
        placeholder="поиск"
      />
      <ButtonMain bgColor="green">Найти</ButtonMain>
    </FormSearch>
  );
};

export default PostSearchUtils;
