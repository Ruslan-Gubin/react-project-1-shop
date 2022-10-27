import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { outIcon, userLogin, userRegistedPng } from "../../../data/icons";
import { useAuthorizationMutation } from "../../../store/rtkQuery/authApi/authApi";
import { resetAuth, selectAuth } from "../../../store/slice";
import { Modal } from "../Modal";
import { ModalRemoveItem } from "../ModalRemoveItem";
import { CustomLink } from "../Ui";

import styles from "./Header.modules.scss";

const Header = React.memo(() => {
  const [_, { reset }] = useAuthorizationMutation();
  const { status } = useSelector(selectAuth);
  const [modalAsk, setModalAsk] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const linkClActive = styles["links-default"];
  const linkCl = styles["links-active"];

  const handlerClickAutLogin = () => {
    dispatch(resetAuth());
    reset();
    setModalAsk(false);
  };

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
            text="Блог"
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

          {!status ? (
            <Link to="/login">
              <img src={userLogin} alt="userRegistedPng" />
            </Link>
          ) : (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => setModalAsk(true)}
              src={outIcon}
              alt="userRegistedPng"
            />
          )}
          {!status && (
            <Link to="/register">
              <img src={userRegistedPng} alt="userRegistedPng" />
            </Link>
          )}
          <Modal active={modalAsk} setActive={setModalAsk}>
            <ModalRemoveItem
              text="Вы действительно хотите выйти"
              cancel={() => setModalAsk(false)}
              confirm={() => handlerClickAutLogin()}
            />
          </Modal>
        </div>
      </div>
    </header>
  );
});

export default Header;
