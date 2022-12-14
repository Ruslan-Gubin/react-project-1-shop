import React from "react";

import styles from "./Home.module.scss";


const FHome: React.FC = React.memo(() => {
  return (
    <div className={styles.root}>

    </div>
  );
});

export const Home = React.memo(FHome);


