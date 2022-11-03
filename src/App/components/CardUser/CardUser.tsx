import React from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../../store/rtkQuery/authApi/authApi";
import { ButtonMain } from "../Ui";

import styles from "./CardUser.module.scss";

const CardUser = () => {
  const { data: user, isLoading  } = authApi.useGetOneAuthQuery(null);
  const navigate = useNavigate()


  return (
    <>
      {!isLoading && user && (
        <div className={styles.root}>
          <div className={styles.container}>
            <img
              className={styles.image}
              src={user.image.url}
              alt="изображение пользователя"
            />
            <div className={styles.body}>
              <div className={styles.button}>
                <ButtonMain onClick={() => navigate(user ? "/add-post" : "/login")}>Добавить пост</ButtonMain>
              </div>
              <div className={styles.button}>
                <ButtonMain onClick={()=> navigate('/register')}>Изменить данные</ButtonMain>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CardUser };
