import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi, dialogApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { ButtonMain } from "ui";
import { IUser } from "models";
import styles from "./CardUser.module.scss";

interface ICardUserInfo {
  user: IUser;
  setModalActive: (value: boolean) => void;
}

const CardUser: React.FC<ICardUserInfo> = ({ setModalActive, user }) => {
  const { auth, requestFriends } = useSelector(selectAuth);
  const {data: authData,isLoading: isLoadAuth} = authApi.useGetUserSinglPageQuery(auth._id,{
    pollingInterval: 10000
  })
  const [setRequestFriend, {}] = authApi.useGetFriendRequestMutation();
  const [setAddFriend, {}] = authApi.useSetAddFriendMutation();
  const [createDialog, {}] = dialogApi.useCreateDialogMutation();
  const [addDialog, {}] = authApi.useSetAddDialogMutation();
  const navigate = useNavigate();


  const handlerCreateDialog = async (user: IUser) => {
    if (!isLoadAuth && authData) {
      const findDialogId = authData.dialogs.find(item => user.dialogs.includes(item))
      if (findDialogId) {
        navigate(`/dialog/${findDialogId}`)
      } else {
        await createDialog({ userOne: authData, userTwo: user })
        .unwrap()
        .then(async (data) => {
          try {
            await addDialog({userOneId: authData._id, userTwoId: user._id, dialogId: data._id,}),
            navigate(`/dialog/${data._id}`);
          } catch (error) {
            return console.log(error);
          }
        })
        .catch((error) => console.log(error));
      }
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
                    <ButtonMain onClick={() => navigate("/register")}>
                      Изменить данные
                    </ButtonMain>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.button}>
                    <ButtonMain onClick={() => handlerCreateDialog(user)}>
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
