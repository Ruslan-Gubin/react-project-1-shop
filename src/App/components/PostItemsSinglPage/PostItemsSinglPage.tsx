import { FC } from "react";
import { Link } from "react-router-dom";
import { PostItemProps } from "../../../models/PostsItemProps";
import { ButtonGoBack } from "../Ui";
import { ButtonMain } from "../Ui";


const PostItemsSinglPage: FC<PostItemProps> = ({ post, remove }) => {

    return (
      <div className="post-container" >
      <div className="post-card" >
        <div className="post-card__header">
          {post.img ? 
        <img style={{width: '100%'}} src={post.img} alt="post.title" />  
        :
        <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className="post-card__header-image"
            width="600"
          />
        }
          
        </div>
        <div className="post-card__body">
          <h4 className="post-card__body-title">{post.title}</h4>
          <p className="post-card__body-text">{post.text}</p>
        </div>
        <div className="post-card__footer">
          <div className="post-card__footer-user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className="post-card__footer-user-image"
            />
            <div className="post-card__footer-user-info">
              <p>{post.user_name || "Guest"}</p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </div>
          </div>
          <div className="post-card__footer-buttons">
            <div className="post-card__footer-buttons-goback">
<ButtonGoBack />
          </div>
            <div className="post-card__footer-buttons-remove">
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