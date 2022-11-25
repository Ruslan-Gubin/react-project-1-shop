import { useAddLikes, useShowLikes } from "hooks";
import React from "react";
import { ShowUsersLikes } from "components";
import { icons } from "data";

import styles from "./LilesDislikes.module.scss";
import {  IUser } from "models";


interface ILilesDislikes {
  target: any
  auth: IUser
  addLikeApi:  any
  addDislikeApi: any
}

const FLilesDislikes:React.FC<ILilesDislikes> = ({ target, auth, addLikeApi, addDislikeApi}) => {
  const { handlerShowLikes, likesArr, showInfoLikes, handlerRemoveShowInfo } = useShowLikes();
  const { handlerAddLike, handlerAddDislike } = useAddLikes(handlerRemoveShowInfo,addLikeApi,addDislikeApi,auth);
  

  return (
    <div className={styles.likes}>
      <img /** Добавляем лайки */
        onClick={() => handlerAddLike(target)}
        className={styles.like}
        src={icons.like}
        alt="like"
      />
      <div /** отображение лайков */
      onClick={() => handlerShowLikes(target.likes, target._id)}
      className={styles.likeCoutn}
      >
        {target.likes.length}
      </div>
      <img /** Добавляем дизлайк */
        onClick={() => handlerAddDislike(target)}
        className={styles.dislike}
        src={icons.dislike}
        alt="dislike"
      />
      <div
        onClick={() => handlerShowLikes(target.dislikes, target._id)}
        className={styles.dislikeCoutn}
      >
        {target.dislikes.length}
      </div>
      {
        showInfoLikes === target._id && (
          <ShowUsersLikes userId={likesArr} auth={auth} />
        ) /** отображение пользователелей которые лайкнули или дизлайкнули */
      }
    </div>
  );
};

export const LilesDislikes = React.memo(FLilesDislikes);
