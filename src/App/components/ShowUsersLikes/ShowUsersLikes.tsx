import React from "react";
import { authApi } from "store/rtkQuery";

import styles from "./ShowUsersLikes.module.scss";

interface IShowUsersLikes {
  userId: string[];
}

const FShowUsersLikes: React.FC<IShowUsersLikes> = ({ userId }) => {
  const { data: usersLikes, isLoading: isLoadingUsersLikes } = authApi.useGetUsersLikesQuery(userId);
    

  return (
  <div className={styles.root}>
    {(!isLoadingUsersLikes && usersLikes)  && usersLikes.map(item => (
      <div key={item._id} className={styles.container}>
        
      <div className={styles.item}>
      <img  className={styles.usersImage} src={item.image?.url ? item.image?.url : ''} alt="usersLikes image url" />
      </div>
        
      </div>
    ))
    }
  </div>
  );
};

export const ShowUsersLikes = React.memo(FShowUsersLikes);
