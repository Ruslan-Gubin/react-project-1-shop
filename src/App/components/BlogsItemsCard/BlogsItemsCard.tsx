import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "store/rtkQuery";
import { postAction, selectAuth } from "store/slice";
import { IPost } from "models";
import { Modal, ModalRemoveItem } from "components";
import * as icon from "data/icons";
import styles from "./BlogsItemsCard.module.scss";

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
  const [removePost, {}] = postApi.useDeletePostMutation();
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handlerRemovePost = 
    async (id: string) => {
      try {
        if (id) {
          await removePost(id)
          .unwrap()
          .catch(error => console.log(error))
        }
        setModalActive(false)
        navigate("/post");
      } catch (error) {
        console.log("Пост не удалось удалить", error);
      }
    }

  return (
    <div className={styles.card}>
      <Link to={`/post/${id}`}>
        <img
          className={!singelPage ? styles.imageUrl : styles.imageUrlSingl}
          src={item.image ? item.image.url : ""}
          alt="image url"
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
            src={item.user.image.url ? item?.user.image.url : ''}
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
            <span>{item.comments.length}</span>
          </div>
           {item.user && item.user._id === auth._id && (
            <>
              <Link to={`/add-post/${id}/edit`}>
                <img
                  onClick={()=> dispatch(postAction.setUpdatePost(item))}
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
