import { hideTagsIcon, showMoreTagsIcon } from 'data/icons';
import { useToggle } from 'hooks';
import { IUser } from 'models';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';

import styles from './FriendsList.module.scss';

interface IFriendsList {
  user: IUser
}

const FFriendsList: React.FC<IFriendsList> = ({user}) => {
  const {auth} = useSelector(selectAuth)
  const [limit, toggle] = useToggle(5, 0)
  const {data: friends, isLoading} = authApi.useGetUsersArrayQuery({arr: user.friends, limit: limit})
  const navigate = useNavigate()

  const handlerNavigate = (id: string) => {
    if (id === auth._id) {
      navigate('/post')
    } else {
      navigate(`/user/${id}`)
    }
  }

  return (
    <div className={styles.root}>
      {limit > 0 ?
       <img className={styles.showIcon} onClick={toggle} src={showMoreTagsIcon} alt="Показать больше" /> 
    :  <img className={styles.showIcon} onClick={toggle} src={hideTagsIcon} alt="Показать больше" />
    }
      <ul className={styles.container}>
      <h2 className={styles.title}>Друзья</h2>
     {!isLoading && friends && friends.map((friend) => (
      <li key={friend._id} onClick={() => handlerNavigate(friend._id ? friend._id : '')} className={styles.user}>
        <div className={styles.userInfo}>
        <img className={styles.userImg} src={friend.image.url} alt="friend image" />
        <p className={styles.userName}>{friend.fullName}</p>
        </div>
      </li>
    ))}
      </ul>
    </div>
  );
};

export const FriendsList = React.memo(FFriendsList);