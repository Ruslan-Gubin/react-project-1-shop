import React from "react";
import { LayoutLeftMenu, BuildingQueueSlots, SityList } from "../";

import styles from "./HeaderMenuLeft.module.scss";

interface HeaderMenuLeftType {}

const HeaderMenuLeft: React.FC<HeaderMenuLeftType> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <BuildingQueueSlots />
         <SityList />
        <LayoutLeftMenu /> 
      </div>
    </div>
  );
};

export { HeaderMenuLeft };
