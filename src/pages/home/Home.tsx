import React from "react";

import styles from "./Home.module.scss";


const FHome: React.FC = React.memo(() => {

  const history = window.history

  const handlerCklick = () => {
    history.back()
  }

  return (
    <div className={styles.root}>
    <button onClick={() => handlerCklick()}>go back</button>

     

    </div>
  );
});

export const Home = React.memo(FHome)

