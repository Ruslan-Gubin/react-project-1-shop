import React from "react";
import { FooterMenu, FooterIcons } from "../";
import styles from './FooterContainer.module.scss';

const FooterContainer = () => {
  return (
    <div className={styles.footer}>
      <FooterIcons />
      <FooterMenu />
      <p>@2022 Online Shop || RGS</p>
    </div>
  );
};

export default FooterContainer;
