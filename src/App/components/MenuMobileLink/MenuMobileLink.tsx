import React from "react";
import { checkUserLoginForMenu } from "utils";
import { IUser } from "models";
import { icons } from "data";
import styles from "./MenuMobileLink.module.scss";

interface IMenuMobileLink {
  setActiveMenu: (value: boolean) => void
  auth: IUser
  handlerClickMobileMenu: (url: string, title: string) => void
}

const FMenuMobileLink: React.FC<IMenuMobileLink> = ({ setActiveMenu, auth, handlerClickMobileMenu }) => {
  
  return (
      <div className={styles.menuActiveContainer}>
        <ul className={styles.menuItems}>
          {checkUserLoginForMenu(auth.fullName).map((item) => (
            <li
            className={styles.item}
            key={item.title}
            onClick={() => handlerClickMobileMenu(item.url, item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className={styles.IconClose}>
          <img
            onClick={() => setActiveMenu(false)}
            src={icons.close}
            alt="Icon close"
            />
        </div>
      </div>
  );
};

export const MenuMobileLink = React.memo(FMenuMobileLink);
