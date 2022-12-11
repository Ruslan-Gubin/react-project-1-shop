import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi } from "store/rtkQuery";
import { authAction, selectAuth } from "store/slice";
import { ButtonMain } from "ui";
import { IUser } from "models";
import styles from "./CardUser.module.scss";
import { useCreateDialog } from "hooks";

interface ICardUserInfo {
  user: IUser;
  setModalActive: (value: boolean) => void;
}

const CardUser: React.FC<ICardUserInfo> = ({ setModalActive, user }) => {
  const { auth, requestFriends } = useSelector(selectAuth);
  const { data } = authApi.useGetOneAuthQuery(auth._id);
  const [setRequestFriend, {}] = authApi.useGetFriendRequestMutation();
  const [setAddFriend, {}] = authApi.useSetAddFriendMutation();
  const [useCreateDialogFn] = useCreateDialog();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerUpdateUser = () => {
    if (data) {
      navigate("/register");
      dispatch(authAction.updateAuth(data));
    }
  };

  return (
    <>
      {user && (
        <div className={styles.root}>
          <div className={styles.container}>
            {user.online ? (
              <div className={styles.online}></div>
            ) : (
              <div className={styles.ofline}></div>
            )}
            <img
              className={styles.image}
              src={user.image.url}
              alt="изображение пользователя"
            />
            <div className={styles.body}>
              {user._id === auth._id ? (
                <>
                  <div className={styles.button}>
                    <ButtonMain
                      onClick={() => navigate(user ? "/add-post" : "/login")}
                    >
                      Добавить пост
                    </ButtonMain>
                  </div>
                  <div className={styles.button}>
                    <ButtonMain onClick={() => handlerUpdateUser()}>
                      Изменить данные
                    </ButtonMain>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.button}>
                    <ButtonMain onClick={() => useCreateDialogFn(user)}>
                      Написать сообщение
                    </ButtonMain>
                  </div>

                  {auth._id && user.friends.includes(auth._id) && user && (
                    <div className={styles.button}>
                      <ButtonMain
                        bgColor="red"
                        onClick={() => setModalActive(true)}
                      >
                        Удалить из друзей
                      </ButtonMain>
                    </div>
                  )}

                  {auth._id &&
                    !user.friends.includes(auth._id) &&
                    user.requestFriends.includes(auth._id) && (
                      <div className={styles.button}>
                        <ButtonMain
                          bgColor="black"
                          onClick={() =>
                            setRequestFriend({ user: user, guest: auth._id })
                          }
                        >
                          Удалить из ожидания
                        </ButtonMain>
                      </div>
                    )}

                  {auth._id &&
                    !user.requestFriends.includes(auth._id) &&
                    !user.friends.includes(auth._id) &&
                    !requestFriends.includes(user._id) && (
                      <div className={styles.button}>
                        <ButtonMain
                          onClick={() =>
                            setRequestFriend({ user: user, guest: auth._id })
                          }
                        >
                          Добавить в друзья
                        </ButtonMain>
                      </div>
                    )}

                  {auth._id &&
                    !user.requestFriends.includes(auth._id) &&
                    !user.friends.includes(auth._id) &&
                    requestFriends.includes(user._id) && (
                      <div className={styles.button}>
                        <ButtonMain
                          bgColor="green"
                          onClick={() =>
                            setAddFriend({
                              userId: user._id,
                              targetId: auth._id,
                            })
                          }
                        >
                          Добавить
                        </ButtonMain>
                      </div>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { CardUser };
