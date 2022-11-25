import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { useCreateDialog, useToggle } from "hooks";
import { IUser } from "models";
import { icons } from "data/icons";

import styles from "./FriendsList.module.scss";

interface IFriendsList {
  user: IUser;
}

const FFriendsList: React.FC<IFriendsList> = ({ user }) => {
  const { auth } = useSelector(selectAuth);
  const [limit, toggle] = useToggle(5, 0);
  const {
    data: friends,
    isLoading,
    refetch,
  } = authApi.useGetUsersArrayQuery({ arr: user.friends, limit: limit });
  const [useCreateDialogFn] = useCreateDialog();
  const navigate = useNavigate();

  const handlerNavigate = (id: string) => {
    if (id === auth._id) {
      navigate("/post");
    } else {
      navigate(`/user/${id}`);
    }
  };

  const handlerClickMessage = (friend: IUser) => {
    refetch();
    useCreateDialogFn(friend);
  };

  return (
    <div className={styles.root}>
      {limit > 0 ? (
        <img
          className={styles.showIcon}
          onClick={toggle}
          src={icons.showMoreTagsIcon}
          alt="Показать больше"
        />
      ) : (
        <img
          className={styles.showIcon}
          onClick={toggle}
          src={icons.hideTagsIcon}
          alt="Показать больше"
        />
      )}
      <ul className={styles.container}>
        <h2 className={styles.title}>Друзья</h2>
        {!isLoading &&
          friends &&
          friends.map((friend: IUser) => (
            <li key={friend._id} className={styles.user}>
              <div className={styles.userInfo}>
                <img
                  onClick={() => handlerNavigate(friend._id ? friend._id : "")}
                  className={styles.userImg}
                  src={friend.image.url}
                  alt="friend image"
                />
                <p className={styles.userName}>{friend.fullName}</p>
              </div>
              <img
                onClick={() => handlerClickMessage(friend)}
                className={styles.message}
                src={icons.chatMessage}
                alt="Icon chat message"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export const FriendsList = React.memo(FFriendsList);
