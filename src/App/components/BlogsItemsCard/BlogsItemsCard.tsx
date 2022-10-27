import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as icon from "../../../data/icons";
import { selectAuth } from "../../../store/slice";
import styles from "./BlogsItemsCard.module.scss";
import ReactMarkdown from "react-markdown";
import { useDeletePostMutation } from "../../../store/rtkQuery";
import { IPost } from "../../../models";
import { Modal } from "../Modal";
import { ModalRemoveItem } from "../ModalRemoveItem";

interface IBlogsItemsCard {
  item: IPost;
  singelPage?: boolean;
  id: string;
}

const BlogsItemsCard: React.FC<IBlogsItemsCard> = ({
  id,
  item,
  singelPage = false,
}) => {
  const { auth } = useSelector(selectAuth);
  const [removePost, {}] = useDeletePostMutation();
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handlerRemovePost = React.useCallback(
    async (id: string) => {
      try {
        if (id) {
          await removePost(id);
        }
        navigate("/");
      } catch (error) {
        console.log("Пост не удалось удалить", error);
      }
    },
    [item]
  );

  return (
    <div className={styles.card}>
      <Link to={`/post/${item._id}`}>
        <img
          className={!singelPage ? styles.imageUrl : styles.imageUrlSingl}
          src={`https://pr1-backend.herokuapp.com${item.imageUrl}` || ""}
          alt="imageUrl"
        />
      </Link>

      <div className={styles.body}>
        <div className={styles.title}>{item.title}</div>
        <span>{item.tags}</span>
        {singelPage && <ReactMarkdown children={item.text} />}
      </div>

      <div className={styles.footer}>
        <div className={styles.user}>
          <img
            className={styles.imageUser}
            src={item?.user.avatarUrl}
            alt="user-image"
          />
          <div>
            <p>{item?.user.fullName}</p>
            <small>
              {item.updatedAt && new Date(item.updatedAt).toLocaleDateString()}
            </small>
          </div>
          <div className={styles.views}>
            <img src={icon.eyeIcon} alt="views Count" />
            <span>{item.viewsCount}</span>
          </div>
          <div className={styles.commentsCount}>
            <img src={icon.commentsIcon} alt="comments Count" />
            <span>123</span>
          </div>
          {item.user && item.user._id === auth._id && (
            <>
              <Link to={`/add-post/${id}/edit`}>
                <img
                  className={styles.update}
                  src={icon.updateIcon}
                  alt="updateIcon"
                />
              </Link>
              <img
                className={styles.delete}
                onClick={() => setModalActive(true)}
                src={icon.deleteIcon}
                alt="deleteIcon"
              />
            </>
          )}
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalRemoveItem
              text="Вы действительно хотите удалить этот пост?"
              confirm={() => handlerRemovePost(id)}
              cancel={() => setModalActive(false)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export { BlogsItemsCard };
