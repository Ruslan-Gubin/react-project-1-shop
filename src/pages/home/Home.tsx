import React from "react";
import { CardSkils } from "ui";
import { descriptionFrontend, descriptionBackend } from "data";

import styles from "./Home.module.scss";

const FHome: React.FC = React.memo(() => {


  return (
    <div className={styles.root}>


      <div className={styles.technologies}>
      <div style={{width: '49%'}} className={styles.fronternCard}>
        <CardSkils data={descriptionFrontend} title={'Frontend'} />
      </div>
      <div style={{width: '49%'}} className={styles.backend}>
        <CardSkils data={descriptionBackend} title={'Backend'}/>
      </div>
      </div>

      


    </div>
  );
});

export const Home = React.memo(FHome);
