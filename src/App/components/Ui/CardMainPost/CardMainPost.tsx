import React, { FC, useState } from "react";
import { PostItemProps } from "../../../../models/PostsItemProps";

const CardMainPost: FC<PostItemProps> = ({ post }) => {
  const [status, setStatus] = useState(false);

  const handlerOpen = (event: React.MouseEvent) => {
    setStatus(true);
  };

  return (
    <div className="post-main__container" key={post._id}>
      <div className="post-main__card" onClick={handlerOpen}>
        <div className="post-main__card-header">
          {post.img ? (
            <img src={post.img} alt={post.title} />
          ) : (
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
            />
          )}
        </div>
        <div className="post-main__card-footer">
          <div className="post-main__card-footer-info">
            <div className="post-main__card-footer-info-img">
              <img src="https://i.pravatar.cc/40?img=1" alt="user__image" />
            </div>
            <p className="post-main__card-footer-info-name">
              {post.user_name || "Guest"}
            </p>
            <small className="post-main__card-footer-info-date">
              {new Date(post.date).toLocaleDateString()}
            </small>
          </div>

          <p className="post-main__card-footer-title">{post.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMainPost;
