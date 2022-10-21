import React from "react";
import styles from "./CardPostInfo.module.scss";

export interface IComments {
  imageUser: string;
  userName: string;
  text: string;
}

interface ITegsCardItem {
  title: string;
  tags?: string[];
  comments?: IComments[];
}

const CardPostInfo: React.FC<ITegsCardItem> = ({
  title,
  tags = [],
  comments = [],
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      {tags &&
        tags.map((item: string) => (
          <div className={styles.item} key={item}>
            {item}
          </div>
        ))}

      <ul className={styles.comentContainer}>
        {comments &&
          comments.map((item: IComments, index: number) => (
            <li className={styles.items} key={index}>
              <img
                className={styles.userImage}
                src={item.imageUser}
                alt="imageUser"
              />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{item.userName}</div>
                <div className={styles.userText}>{item.text}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { CardPostInfo };
