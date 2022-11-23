import React from "react";
import { commentApi } from "store/rtkQuery";
import { IComments, IUser } from "models";
import { deleteIcon, updateIcon } from "data";
import styles from "./CommentCard.module.scss";
import { LilesDislikes } from "../LilesDislikes";

interface ICommentCard {
  updateComment: (item: IComments) => void;
  setRemoveCommentModal: (id: string) => void;
  auth: IUser;
  arrComments: string[];
}

const FCommentCard: React.FC<ICommentCard> = ({ arrComments, updateComment,setRemoveCommentModal, auth,}) => {
  const { data: comments = [], isLoading: isLoadingComments } = commentApi.useGetCommentsQuery(arrComments);
  const [addLikeApi, {}] = commentApi.useSetAddLikeMutation();
  const [addDislikeApi, {}] = commentApi.useSetAddDislikeMutation();

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
                    <LilesDislikes 
                    auth={auth} 
                    target={item}
                    addDislikeApi={addDislikeApi}
                    addLikeApi={addLikeApi}
                    />
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
