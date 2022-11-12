import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDeletePostMutation, useGetOnePostQuery } from "store/rtkQuery";
import { ButtonMain } from "ui";

import styles from './PostItemsSinglPage.module.scss';

const PostItemsSinglPage: React.FC = React.memo(() => {
  const [deletePost, {}] = useDeletePostMutation();
  const {id} = useParams<string>()
  const{ data = [],isError,isLoading} = useGetOnePostQuery({id})


    return (
      <div className={styles.post} >
        {isError && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
      <div className={styles.card} >
        <div className={styles.header}>
          {data.img ? 
        <img style={{width: '100%'}} src={data.img} alt="post.title" />  
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
          <h4 className={styles["body-title"]}>{data.title}</h4>
          <p className={styles["body-text"]}>{data.text}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className={styles["user-image"]}
            />
            <div className={styles["user-info"]}>
              <p>{data.user_name || "Guest"}</p>
              <small>{new Date(data.date).toLocaleDateString()}</small>
            </div>
          </div>
          <div className={styles["footer-buttons"]}>
            <div>
{data.viewsCount}
          </div>
            <div>
              <Link to="/post">
                <ButtonMain bgColor="red" onClick={() => deletePost(data).unwrap()}>
                  Удалить
                </ButtonMain>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
});

export default PostItemsSinglPage;