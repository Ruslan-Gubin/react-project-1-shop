import React from "react";
import { commentApi } from "store/rtkQuery";
import { IComments, IUser } from "models";
import { dislike, like, deleteIcon, updateIcon } from "data";
import { helperLikesFunction } from "utils";
import { ShowUsersLikes } from "../ShowUsersLikes";
import styles from "./CommentCard.module.scss";

interface ICommentCard {
  updateComment: (item: IComments) => void;
  handlerRemoveComment: (id: string) => void;
  auth: IUser;
}

const FCommentCard: React.FC<ICommentCard> = ({
  updateComment,
  handlerRemoveComment,
  auth,
}) => {
  const { data: comments, isLoading: isLoadingComments } =
    commentApi.useGetCommentsQuery("");
  const [addLikeApi, {}] = commentApi.useSetAddLikeMutation();
  const [addDislikeApi, {}] = commentApi.useSetAddDislikeMutation();
  const [showInfoLikes, setShowInfoLikes] = React.useState("");
  const [showInfoDislikes, setShowInfoDislikes] = React.useState("");

  const handlerShowLikes = (item: IComments) => {
    setShowInfoDislikes("");
    if (item.likes.length <= 0) {
      return;
    }
    const id = item._id;
    if (id === showInfoLikes) {
      setShowInfoLikes("");
    } else {
      setShowInfoLikes(id);
    }
  };

  const handlerShowDislikes = (item: IComments) => {
    setShowInfoLikes("");
    if (item.dislikes.length <= 0) {
      return;
    }
    const id = item._id;
    if (id === showInfoDislikes) {
      setShowInfoDislikes("");
    } else {
      setShowInfoDislikes(id);
    }
  };

  const handlerAddLike = async (item: IComments) => {
    setShowInfoLikes("");
    setShowInfoDislikes("");
    const userId: string = auth._id ? auth._id : "";
    const dislikeArr = item.dislikes;

    helperLikesFunction(dislikeArr, userId, addDislikeApi, item);

    await addLikeApi(item)
      .unwrap()
      .catch((error) => console.log(error));
  };

  const handlerAddDislike = async (item: IComments) => {
    setShowInfoLikes("");
    setShowInfoDislikes("");
    const userId: string = auth._id ? auth._id : "";
    const likesArr = item.likes;

    helperLikesFunction(likesArr, userId, addLikeApi, item);

    await addDislikeApi(item)
      .unwrap()
      .catch((error) => console.log(error));
  };

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
                        onClick={() => handlerShowLikes(item)}
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
                        onClick={() => handlerShowDislikes(item)}
                        className={styles.dislikeCoutn}
                      >
                        {item.dislikes.length}
                      </div>
                      {/* отображение пользователелей которые лайкнули или дизлайкнули  */}
                      {showInfoLikes === item._id && (
                        <ShowUsersLikes userId={item.likes} />
                      )}
                      {showInfoDislikes === item._id && (
                        <ShowUsersLikes userId={item.dislikes} />
                      )}
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
                            onClick={() => handlerRemoveComment(item._id)}
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
