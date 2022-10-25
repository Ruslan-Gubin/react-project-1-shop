import React from "react";
import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { commentsIcon, eyeIcon } from "../../../data/icons";
import { IPost } from "../../../models/products";
import { selectAuth } from "../../../store/slice";
import { ButtonMain } from "../Ui";
import styles from "./BlogsItemsCard.module.scss";
import ReactMarkdown from 'react-markdown';
import { useDeletePostMutation } from "../../../store/rtkQuery";

interface IBlogsItemsCard {
  item: IPost;
  singelPage?: boolean
}

const BlogsItemsCard: React.FC<IBlogsItemsCard> = ({ id,  item , singelPage = false }) => {
  const {auth} = useSelector(selectAuth)
  const [removePost, {}] = useDeletePostMutation()
  const navigate = useNavigate()
  
 const  handlerRemovePost = React.useCallback (async  (id) => {
  try {
    if (id) {
      await removePost(id)
    }
  navigate('/')
  } catch (error) {
    console.log('Пост не удалось удалить', error)
  }
  
  },[item])
  
  return (
    <div className={styles.card}>
      <Link to={`/post/${item._id}`}>
        {/* <img
          className={styles.imageUrl}
          src={item.imageUrl && `${process.env.REACT_APP_API_URL}${item.imageUrl}`}
          alt="post.title"
        /> */}
      </Link>

      <div className={styles.body}>
        <Link to={`/post/${item._id}`}>
          <div className={styles.title}>{item.title}</div>
        </Link>
      <span>{item.tags}</span>
      <ReactMarkdown children={item.text}  />
      </div>

      

      <div className={styles.footer}>
        <div className={styles.user}>
          <img
            className={styles.imageUser}
            src={item?.user?.avatarUrl}
            alt="user__image"
          />
          <div>
            <p>{item.user ? item.user.fullName : "Guest"}</p>
            <small>{new Date(item.updatedAt).toLocaleDateString()}</small>
          </div>
          <div className={styles.views}>
            <img src={eyeIcon} alt="views Count" />
            <span>{item.viewsCount}</span>
          </div>
          <div className={styles.commentsCount}>
            <img src={commentsIcon} alt="comments Count" />
            <span>123</span>
          </div>
        {item.user && item.user._id === auth._id && 
          <>
          <Link to={`/post/${id}/edit`}>
           <ButtonMain>Update</ButtonMain>
          </Link>
           <ButtonMain onClick={() => handlerRemovePost(id)}>Delete</ButtonMain>
          </>
        }  

        </div>
      </div>
    </div>
  );
};

export { BlogsItemsCard };
