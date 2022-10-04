import React from "react";
import { Link } from "react-router-dom";
import { PostItemProps } from "../../../models/PostsItemProps";
import { ButtonGoBack } from "../Ui";
import { ButtonMain } from "../Ui";

import styles from './PostItemsSinglPage.module.scss';

const PostItemsSinglPage: React.FC<PostItemProps> = ({ post, remove }) => {

    return (
      <div className={styles.post} >
      <div className={styles.card} >
        <div className={styles.header}>
          {post.img ? 
        <img style={{width: '100%'}} src={post.img} alt="post.title" />  
        :
        <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className={styles.image}
            width="600"
          />
        }
          
        </div>
        <div className={styles.body}>
          <h4 className={styles["body-title"]}>{post.title}</h4>
          <p className={styles["body-text"]}>{post.text}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className={styles["user-image"]}
            />
            <div className={styles["user-info"]}>
              <p>{post.user_name || "Guest"}</p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </div>
          </div>
          <div className={styles["footer-buttons"]}>
            <div>
<ButtonGoBack />
          </div>
            <div>
              <Link to="/post">
                <ButtonMain bgColor="red" onClick={() => remove(post)}>
                  Удалить
                </ButtonMain>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PostItemsSinglPage;