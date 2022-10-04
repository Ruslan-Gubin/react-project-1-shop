import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../FooterContainer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
