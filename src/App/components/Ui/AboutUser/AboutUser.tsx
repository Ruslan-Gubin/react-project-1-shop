import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "store/slice";
import { aboutSitePosts, aboutSiteProduct, aboutUserData, icons, aboutGameProduct } from "data";

import styles from "./AboutUser.module.scss";

const category = [
  { text: "Посты", id: 1, data: aboutSitePosts },
  { text: "Продукция", id: 2, data: aboutSiteProduct },
  { text: "Игра", id: 3, data: aboutGameProduct },
];

const AboutUser: React.FC = () => {
  const [titleActive, setTitleActive] = React.useState(category[0]);
  const { auth } = useSelector(selectAuth);
  const navigate = useNavigate();

  const handlerClickAuth = () => {
    if (auth.fullName) {
      navigate("/user/6362c4b96af011199d3d25ae");
    } else {
      navigate("/login");
    }
  };

  const handlerClickTitle = (data: {
    text: string;
    id: number;
    data: string[];
  }) => {
    setTitleActive(data);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.progectInfo}>
          <div className={styles.titles}>
            {category.map((item) => (
              <h2
                key={item.id}
                onClick={() => handlerClickTitle(item)}
                className={
                  item.id === titleActive?.id ? styles.active : styles.title
                }
              >
                <nav>{item.text}</nav>
                
              </h2>
            ))}
          </div>

          <ul>
            {titleActive &&
              titleActive.data.map((item) => (
                <li key={item} className={styles.item}>
                  <img
                    className={styles.img}
                    src={icons.okGreen}
                    alt="icon ok"
                  />
                  <p className={styles.text}>{item}</p>
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.header}>
            <div className={styles.name}>
              <h3 onClick={() => handlerClickAuth()}>{aboutUserData.name}</h3>
            </div>
            <div className={styles.image}>
              <img
                className={styles.userImg}
                src="https://res.cloudinary.com/ds289tkqj/image/upload/v1670856816/Posts/ju6av45ckuwpwthobu6t.jpg"
                alt="user image"
              />
            </div>
          </div>
          <div className={styles.body}>
            <p className={styles.text}>{aboutUserData.text}</p>
          </div>
          <div className={styles.footer}>
            <ul>
              <li>
                <a href="https://github.com/Ruslan-Gubin" target={"_blank"}>
                  <img
                    className={styles.icon}
                    src={icons.github}
                    alt="icon github"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUser };
