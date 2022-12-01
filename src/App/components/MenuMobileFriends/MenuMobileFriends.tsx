import React from 'react';
import { IUser } from 'models';
import { icons } from 'data';

import styles from './MenuMobileFriends.module.scss';
import { authApi } from 'store/rtkQuery';
import { useNavigate } from 'react-router-dom';

interface IMenuMobileFriends{
  setActiveMenuFriends: (value: boolean) => void
  auth: IUser
}

const FMenuMobileFriends: React.FC<IMenuMobileFriends> = ({setActiveMenuFriends, auth}) => {
  const {data: userFriends = [], isLoading: isLoadFriends} = authApi.useGetUsersArrayQuery({ arr: auth.friends, limit: 0 })
 const navigate = useNavigate()

const handlerClickUser = (id: string) => {
  navigate(`/user/${id}`)
  setActiveMenuFriends(false)
}


  return (
    <div className={styles.root}>
      
        <ul className={styles.menuItems}>
          {userFriends && !isLoadFriends && userFriends.map((item) => (
            <li
            className={styles.item}
            key={item._id}
            onClick={() => handlerClickUser(item._id)}
            >
              <div className={styles.user}> 
                
              <img className={styles.userImage} src={item.image.url} alt='image friends' />
           <p className={styles.userName}>{item.fullName}</p>   
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.IconClose}>
          <img
            onClick={() => setActiveMenuFriends(false)}
            src={icons.close}
            alt="Icon close"
            />
        </div>
      
      
    </div>
  );
};

export const MenuMobileFriends = React.memo(FMenuMobileFriends);