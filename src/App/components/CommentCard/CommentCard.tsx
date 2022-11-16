import React from "react";
import { commentApi } from "store/rtkQuery";
import { IComments, IUser } from "models";
import { dislike, like, deleteIcon, updateIcon } from "data";
import { ShowUsersLikes } from "../ShowUsersLikes";
import styles from "./CommentCard.module.scss";
import { useAddLikes, useShowLikes } from "hooks";

interface ICommentCard {
  updateComment: (item: IComments) => void;
  setRemoveCommentModal: (id: string) => void;
  auth: IUser;
  arrComments: string[];
}

const FCommentCard: React.FC<ICommentCard> = ({arrComments, updateComment,setRemoveCommentModal, auth,}) => {
  const { data: comments = [], isLoading: isLoadingComments } = commentApi.useGetCommentsQuery(arrComments);  
  const [addLikeApi, {}] = commentApi.useSetAddLikeMutation();
  const [addDislikeApi, {}] = commentApi.useSetAddDislikeMutation();
  const { handlerShowLikes, likesArr, showInfoLikes, handlerRemoveShowInfo } = useShowLikes();
  const { handlerAddLike, handlerAddDislike } = useAddLikes(handlerRemoveShowInfo,addLikeApi,addDislikeApi,auth);


  return (
    <div className={styles.root}>
      <ul>
        {!isLoadingComments &&
          comments?.map((item) => (
            <div key={item._id} className={styles.card}>
              <div className={styles.imgContainer}>
                <li>
                  <img
                    className={styles.image}
                    src={item?.user.image.url}
                    alt="user image url"
                  />
                </li>
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.header}>
                  <li className={styles.name}>{item.user.fullName}</li>
                  <li className={styles.date}>
                    {new Date(item?.updatedAt).toLocaleDateString()}
                  </li>
                </div>
                <div className={styles.body}>
                  <li className={styles.text}>{item.text}</li>
                </div>

                {auth.fullName && (
                  <div className={styles.footer}>
                    <div className={styles.likes}>
                      <img /** Добавляем лайки */
                        onClick={() => handlerAddLike(item)}
                        className={styles.like}
                        src={like}
                        alt="like"
                      />
                      <div /** отображение лайков */
                        onClick={() => handlerShowLikes(item.likes, item._id)}
                        className={styles.likeCoutn}
                      >
                        {item.likes.length}
                      </div>
                      <img /** Добавляем дизлайк */
                        onClick={() => handlerAddDislike(item)}
                        className={styles.dislike}
                        src={dislike}
                        alt="dislike"
                      />
                      <div
                        onClick={() =>
                          handlerShowLikes(item.dislikes, item._id)
                        }
                        className={styles.dislikeCoutn}
                      >
                        {item.dislikes.length}
                      </div>
                      {
                        showInfoLikes === item._id && (
                          <ShowUsersLikes userId={likesArr} />
                        ) /** отображение пользователелей которые лайкнули или дизлайкнули */
                      }
                    </div>
                    {auth?._id === item.user._id && (
                      <div className={styles.buttons}>
                        <div className={styles.updateBtn}>
                          <img
                            onClick={() => updateComment(item)}
                            src={updateIcon}
                            alt="removeGoodsPng"
                          />
                        </div>

                        <div className={styles.removeBtn}>
                          <img
                            onClick={() => setRemoveCommentModal(item._id)}
                            src={deleteIcon}
                            alt="removeGoodsPng"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export const CommentCard = React.memo(FCommentCard);
