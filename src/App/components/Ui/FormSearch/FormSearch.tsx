import React from "react";
import InputMain from "../InputMain";

const FormSearch = ({ children, submitImput }: any) => {
  return (
    <div className="post-main__forms-search">
      <form autoComplete="off" onSubmit={submitImput}>       
        {children}
      </form>
    </div>
  );
};

export default FormSearch;
