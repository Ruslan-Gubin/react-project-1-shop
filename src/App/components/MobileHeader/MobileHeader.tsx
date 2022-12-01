import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "store/slice";
import { MenuMobileFriends, MenuMobileLink } from "components";
import { icons } from "data";

import styles from "./MobileHeader.module.scss";

interface IMobileHeader {
  handlerClickAutLogin: () => void;
}

const FMobileHeader: React.FC<IMobileHeader> = ({ handlerClickAutLogin }) => {
  const { pathname } = useLocation();
  const [activeMenuLink, setActiveMenuLink] = React.useState(false);
  const [activeMenuFriends, setActiveMenuFriends] = React.useState(false);
  const [activeFindUser, setActiveFindUser] = React.useState(false);
  const { auth } = useSelector(selectAuth);
  const navigate = useNavigate();


  const handlerClickMobileMenu = (nav: string, title: string) => {
    if (title === "Выйти") {
      handlerClickAutLogin();
    }

    navigate(nav);
    setActiveMenuLink(!activeMenuLink);
  };

  return (
    <div className={styles.mobileRoot}>
      <div className={styles.mobileContainer}>
        {!activeMenuLink && !activeMenuFriends ? (
          <>
            <img
              onClick={() => setActiveMenuLink(!activeMenuLink)}
              className={styles.menuIcons}
              src={icons.menu}
              alt="Image menu Header"
            />
            {pathname === "/post" && (
              <img
                style={{ marginLeft: 20 }}
                onClick={() => setActiveMenuFriends(!activeMenuFriends)}
                className={styles.menuIcons}
                src={icons.findFriends}
                alt="Image menu Friends"
              />
            )}
          </>
        ) : (
          <div className={styles.menuActive}>
            <>
              {activeMenuLink && (
                <MenuMobileLink
                  setActiveMenu={setActiveMenuLink}
                  handlerClickMobileMenu={handlerClickMobileMenu}
                  auth={auth}
                />
              )}
              {activeMenuFriends && (
                <MenuMobileFriends
                  setActiveMenuFriends={setActiveMenuFriends}
                  auth={auth}
                />
              )}
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export const MobileHeader = React.memo(FMobileHeader);
