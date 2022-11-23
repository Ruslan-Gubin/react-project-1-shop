import { IUser } from "models";
import React from "react";
import {  useNavigate } from "react-router-dom";
import { authApi } from "store/rtkQuery";

import styles from "./ShowUsersLikes.module.scss";

interface IShowUsersLikes {
  userId: string[];
  auth: IUser
}

const FShowUsersLikes: React.FC<IShowUsersLikes> = ({ userId, auth }) => {
  const { data: usersLikes, isLoading: isLoadingUsersLikes } = authApi.useGetUsersLikesQuery(userId);
  const navigate = useNavigate()  

  const handlerLinkUser = (id:string) => {
      if(id === auth._id ) {
        navigate('/post')
      } else {
        navigate(`/user/${id}`)
     }
  }

  return (
  <div className={styles.root}>
    {!isLoadingUsersLikes && usersLikes  && usersLikes.map(item => (
      <div key={item._id} className={styles.container}>
        
      <div className={styles.item}>
      
      <img onClick={() => handlerLinkUser(item._id)} className={styles.usersImage} src={item.image?.url ? item.image?.url : ''} alt="usersLikes image url" />
      
      </div>
        
      </div>
    ))
    }
  </div>
  );
};

export const ShowUsersLikes = React.memo(FShowUsersLikes);
