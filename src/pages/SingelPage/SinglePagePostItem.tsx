import { FC } from "react";
import { Link } from "react-router-dom";
import ButtonGoBack from "../../App/components/ButtonGoBack";
import { PostItemProps } from "../../models/PostsItemProps";


const imgGuest = (
  <img
    src="https://picsum.photos/200/300?grayscale"
    className="post-card__icons-item"
    alt="imgGuest"
  />
);
const img = (
  <img
    src="https://picsum.photos/200/300"
    className="post-card__img-item"
    alt="img"
  />
);

const SinglePagePostItem: FC<PostItemProps> = ({ post, remove }) => {
  return (
    <div className="post-card" key={post._id}>
      <div className="post-card__img">{post.img || img}</div>
      <div className="post-card__info-auth">
        <div className="post-card__icons">{post.user_icons || imgGuest}</div>
        <div className="post-card__user-name">{post.user_name || "Guest"}</div>
        <div className="post-card__date">
          {new Date(post.date).toLocaleDateString()}
        </div>
      </div>
      <div className="post-card__title">{post.title}</div>
      <div className="post-card__text">
        <p className="post-card__text-item">{post.text}</p>
      </div>
      <div className="post-card__buttons">
        <ButtonGoBack />
        <Link to="/post">
          <button
            onClick={() => remove(post)}
            className="post-card__buttons-delete"
          >
            Удалить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePagePostItem;
