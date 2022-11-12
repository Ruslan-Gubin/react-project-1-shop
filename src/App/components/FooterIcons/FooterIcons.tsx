import React from "react";
import {
  imagesUrlVk,
  imagesUrlFacebook,
  imagesUrlTwitter,
  imagesUrlInstagram,
} from "data/imagesUrl";
import styles from "./FooterIcons.module.scss";

const FooterIcons: React.FC = React.memo(() => {
  return (
    <ul className={styles.icons}>
      <li>
        <a href={"https://instagramishe.ru/"} target="_blank">
          <img src={imagesUrlInstagram} alt="tvit" />
        </a>
      </li>
      <li>
        <a href={"https://vk.com/"} target="_blank">
          <img src={imagesUrlVk} alt="inst" />
        </a>
      </li>
      <li>
        <a href={"http://www.facebook.com.vn/"} target="_blank">
          <img src={imagesUrlFacebook} alt="vk" />
        </a>
      </li>
      <li>
        <a
          href={"https://investor.twitterinc.com/home/default.aspx"}
          target="_blank"
        >
          <img src={imagesUrlTwitter} alt="fb" />
        </a>
      </li>
    </ul>
  );
});

export { FooterIcons };
