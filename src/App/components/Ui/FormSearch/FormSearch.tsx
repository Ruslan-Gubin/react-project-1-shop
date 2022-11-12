import React from "react";

const FormSearch = React.memo(({ children, submitImput }: any) => {
  return (
    <div >
      <form autoComplete="off" onSubmit={submitImput}>       
        {children}
      </form>
    </div>
  );
});

export {FormSearch};
