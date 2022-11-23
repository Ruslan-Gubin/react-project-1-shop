import { IUser } from 'models';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'store/slice';
import styles from './CardUserInfo.module.scss';

interface ICardUserInfo {
  userSinglPage: IUser
}

const FCardUserInfo:React.FC<ICardUserInfo> = ({userSinglPage}) => {
  const {auth} = useSelector(selectAuth)
  const [user, setUser] = React.useState<IUser>(auth)

  React.useEffect(() => {
    if (userSinglPage) {
      setUser(userSinglPage)
    } else if(!userSinglPage) {
      setUser(auth)
    }
  },[userSinglPage])

  return (
    <>
  <div className={styles.root}>
    <div className={styles.container}>
    <div className={styles.body}>
    <div className={styles.fullName}><p>{user.fullName}</p></div>
    <div className={styles.emailUser}><span>{user?.email}</span></div>
    <div className={styles.date}><small>Дата создания: {new Date(String(user.updatedAt)).toLocaleDateString()}</small></div>
    </div>
    </div>
  </div>
  
     
    </>
  );
};

export const CardUserInfo = React.memo(FCardUserInfo);