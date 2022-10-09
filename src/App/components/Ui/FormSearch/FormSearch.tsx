import React from "react";
import styles from './FormSearch.module.scss';

const FormSearch = React.memo(({ children, submitImput }: any) => {
  return (
    <div className={styles.search}>
      <form autoComplete="off" onSubmit={submitImput}>       
        {children}
      </form>
    </div>
  );
});

export {FormSearch};
