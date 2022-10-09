import React from "react";
import { FooterMenu, FooterIcons } from "../";
import styles from './FooterContainer.module.scss';

const FooterContainer = React.memo(() => {
  return (
    <div className={styles.footer}>
      <FooterIcons />
      <FooterMenu />
      <p>@2022 Online Shop || RGS</p>
    </div>
  );
});

export {FooterContainer};
