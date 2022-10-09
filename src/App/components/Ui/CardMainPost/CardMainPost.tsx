import React, { FC, useState } from "react";
import { PostItemProps } from "../../../../models/PostsItemProps";
import styles from './CardMainPost.module.scss';

const CardMainPost: FC<PostItemProps> = React.memo(({ post }) => {
  const [status, setStatus] = useState(false);

  const handlerOpen = (event: React.MouseEvent) => {
    setStatus(true);
  };

  return (
    <div className={styles.container} key={post._id}>
      <div className={styles.card} onClick={handlerOpen}>
        <div className={styles.header}>
          {post.img ? (
            <img src={post.img} alt={post.title} />
          ) : (
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
            />
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles.info}>
            <div className={styles.img}>
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" />
            </div>
            <p>
              {post.user_name || "Guest"}
            </p>
          </div>

          <p className={styles.title}>{post.title}</p>
        </div>
      </div>
    </div>
  );
});

export  {CardMainPost};
