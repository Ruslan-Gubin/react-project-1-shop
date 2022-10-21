import React from "react";
import { Link } from "react-router-dom";
import { commentsIcon, eyeIcon } from "../../../data/icons";
import { IPost } from "../../../models/products";
import styles from "./BlogsItemsCard.module.scss";

interface IBlogsItemsCard {
  item: IPost;
  singelPage?: boolean
}

const BlogsItemsCard: React.FC<IBlogsItemsCard> = ({  item , singelPage = false }) => {


  return (
    <div className={styles.card}>
      <Link to={`/post/${item._id}`}>
        <img
          className={styles.imageUrl}
          src={item.user ? item.imageUrl : item.img}
          alt="post.title"
        />
      </Link>

      <div className={styles.body}>
        <Link to={`/post/${item._id}`}>
          <div className={styles.title}>{item.title}</div>
        </Link>
      {!singelPage && <span>{item.tegs}</span>}
      <p>{item.text}</p> 
      </div>

      

      <div className={styles.footer}>
        <div className={styles.user}>
          <img
            className={styles.imageUser}
            src={
              item.user
                ? item.user.avatarUrl
                : "https://i.pravatar.cc/40?img=1"
            }
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
        </div>
      </div>
    </div>
  );
};

export { BlogsItemsCard };
