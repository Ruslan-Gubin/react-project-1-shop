import React from "react";
import { authApi } from "store/rtkQuery";
import {  selectAuth } from "store/slice";
import {  useSelector } from "react-redux";
import { IUser } from "models";
import { cancelStop, okGreen } from "data";

import styles from "./RequestFriend.module.scss";
import { Link } from "react-router-dom";
import { useToggle } from "hooks";
import { hideTagsIcon, showMoreTagsIcon } from "data/icons";

interface IRequestFriend {
  user: IUser
}

const FRequestFriend: React.FC<IRequestFriend> = ({ user }) => {
  const { auth } = useSelector(selectAuth);
  const [limit, toggle] = useToggle(5, 0)
  const {data: usersRequestFriend, isLoading} = authApi.useGetUsersArrayQuery({arr: user.requestFriends, limit: limit})
  const [userRemoveFriendRequest, {}] = authApi.useSetRemoveUserFriendRequestMutation()
  const [userAddFriend, {}] = authApi.useSetAddFriendMutation()
  
  const handlerAddFriend = async (id: string) => {
    if(id && auth._id) {
    const params = {
      userId: auth._id,
      targetId: id,
    }
    await userAddFriend(params)
    .unwrap()
    .catch(error => console.log(error))
    }
  }

  const handlerRemoveUserFriendRequest = async (id: string) => {
    if (user.requestFriends && auth._id && id) {
      const params = {
        usersArrId: user.requestFriends,
      userId: auth._id,
      removeId: id
    }
    await userRemoveFriendRequest(params)
    .unwrap()
    .catch(error => console.log(error));
  }
  }

  return (
    <>
    {!isLoading && usersRequestFriend &&
    <div className={styles.root}>
      {limit > 0 ?
       <img className={styles.showIcon} onClick={toggle} src={showMoreTagsIcon} alt="Показать больше" /> 
      :<img className={styles.showIcon} onClick={toggle} src={hideTagsIcon} alt="Показать больше" />
      }
        <ul className={styles.container}>
          <h2 className={styles.title}>Запрос в друзья</h2>
          {  usersRequestFriend.map((item) => (
            <li key={item._id} className={styles.user}>
              <div className={styles.userInfo}>
                <Link to={`/user/${item._id}`}>
              <img className={styles.userImg} src={item.image.url ? item.image.url : ''} alt="Изображение пользователя" />
                </Link>
              <p className={styles.userName}>{item.fullName}</p>
              </div>
            <div className={styles.buttons}>
              <img onClick={() => handlerAddFriend(item._id ? item._id : '')} className={styles.ok} src={okGreen} alt="Подтвердить" />
             
              <img onClick={() => handlerRemoveUserFriendRequest(item._id ? item._id : '')} className={styles.cancel} src={cancelStop} alt="Отмена" />
              
            </div>
              
            </li>
          ))}
        </ul>
    </div>
        }
          </>
  );
};

export const RequestFriend = React.memo(FRequestFriend);
