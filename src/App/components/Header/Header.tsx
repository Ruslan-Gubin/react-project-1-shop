import React from "react";
import { CustomLink } from "../Ui";

import styles from "./Header.modules.scss";

const Header = React.memo(() => {
  const linkClActive = styles["links-default"];
  const linkCl = styles["links-active"];

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles["logo-text"]}>GRS</div>
        </div>

        <div className={styles.links}>
          <CustomLink
            activeCl={linkClActive}
            noActive={linkCl}
            to="/"
            text="Главная"
          ></CustomLink>
          <CustomLink
            activeCl={linkClActive}
            noActive={linkCl}
            to="/products"
            text="Наша продукция"
          ></CustomLink>
          <CustomLink
            activeCl={linkClActive}
            noActive={linkCl}
            to="/post"
            text="Посты"
          ></CustomLink>
        </div>
      </div>
    </header>
  );
});

export default Header;
