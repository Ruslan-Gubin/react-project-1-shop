import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { postApi } from "store/rtkQuery";
import { postAction, selectAuth } from "store/slice";
import { useInView } from 'react-intersection-observer';
import { IPost } from "models";
import { Modal, ModalRemoveItem, LilesDislikes } from "components";
import { icons } from "data";
import styles from "./BlogsItemsCard.module.scss";

interface IBlogsItemsCard {
  item: IPost;
  singelPage?: boolean;
  id: string;
}

const BlogsItemsCard: React.FC<IBlogsItemsCard> = ({id, item, singelPage = false,}) => {
  const [updateAddLike, {}] = postApi.useSetAddLikeMutation()
  const [updateAddDislike, {}] = postApi.useSetAddDislikeMutation()
  const { auth } = useSelector(selectAuth);
  const [removePost, {}] = postApi.useDeletePostMutation();
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const [ref, isVisible] = useInView({threshold: 0.5, triggerOnce: true})
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
    <div ref={ref} className={!singelPage ? styles.card : styles.cardSinglPage}>
      <Link to={`/post/${id}`}>
        <img
        
          className={!singelPage ? styles.imageUrl : styles.imageUrlSingl}
          src={isVisible ? item.image.url : ""}
          alt="image url"
        />
      </Link>

      <div className={styles.body}>
        <div className={styles.title}>{item.title}</div>
        {/* <span>{item.tags}</span> */}
        <div className={styles.text}>
        {singelPage && <ReactMarkdown children={item.text} />}
        </div>

      </div>

      <div className={styles.footer}>
        <div className={styles.user}>
    <Link to={`/user/${item.user._id}`}>
          <img
            className={styles.imageUser}
            src={item.user.image.url ? item?.user.image.url : ''}
            alt="user-image"
            />
            </Link>

          <div>
            <p>{item?.user.fullName}</p>
            <small>
              {item.updatedAt && new Date(item.updatedAt).toLocaleDateString()}
            </small>
          </div>
          <div className={styles.views}>
            <img src={icons.eyeIcon} alt="views Count" />
            <span>{item.viewsCount}</span>
          </div>
          <div className={styles.commentsCount}>
            <img src={icons.commentsIcon} alt="comments Count" />
            <span>{item.comments.length}</span>
          </div>
          </div>
             <div className={styles.buttons}>
              
        <div className={styles.likes}>
          <LilesDislikes target={item} auth={auth} addLikeApi={updateAddLike} addDislikeApi={updateAddDislike}/>
        </div>
           {item.user && item.user._id === auth._id && (
        <div className={styles.buttonUpdate}>
              <Link to={`/add-post/${id}/edit`}>
                <img
                  onClick={()=> dispatch(postAction.setUpdatePost(item))}
                  className={styles.update}
                  src={icons.updateIcon}
                  alt="updateIcon"
                  />
              </Link>
              <img
              className={styles.delete}
              onClick={() => setModalActive(true)}
              src={icons.deleteIcon}
              alt="deleteIcon"
              />
            </div>
              
              )}
              </div>
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalRemoveItem
              text="Вы действительно хотите удалить этот пост?"
              confirm={() => handlerRemovePost(id)}
              cancel={() => setModalActive(false)}
            />
          </Modal>
      </div>
    </div>
  );
};

export { BlogsItemsCard };
