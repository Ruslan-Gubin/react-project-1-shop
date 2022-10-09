import React from "react";
import { Outlet } from "react-router-dom";
import { FooterContainer } from "../FooterContainer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
        <Outlet />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
});

export { Layout };
