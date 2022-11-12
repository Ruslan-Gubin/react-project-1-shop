import { authApi } from 'store/rtkQuery';
import styles from './CardUserInfo.module.scss';

const CardUserInfo = () => {
  const {data:user, isLoading} = authApi.useGetOneAuthQuery(null)


  return (
    <>
    {!isLoading && 
  <div className={styles.root}>
    <div className={styles.container}>
    <div className={styles.body}>
    <div className={styles.fullName}><p>{user.fullName}</p></div>
    <div className={styles.emailUser}><span>{user?.email}</span></div>
    <div className={styles.date}><small>Дата создания: {new Date(String(user.updatedAt)).toLocaleDateString()}</small></div>
    </div>

    </div>
  </div>
    }
     
    </>
  );
};

export {CardUserInfo};