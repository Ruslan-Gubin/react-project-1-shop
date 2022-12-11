import React from "react";
import { commentApi, postApi } from "store/rtkQuery";

import { useToggle } from "hooks";

import styles from "./CardPostInfo.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "data";

interface ITegsCardItem {
  title: string;
  tags?: string[];
  handelClickTag?: (value: string) => void;
  tagValue?: string;
  userTarget: string | undefined
}

const CardPostInfo: React.FC<ITegsCardItem> = ({
  title,
  handelClickTag,
  tagValue,
  userTarget,
}) => {
  const [limitTags, toggleTags] = useToggle(10, '');
  const [limitComments, toggleComments] = useToggle(5, '');
  const { data: tags, isLoading: isLoadingTags } =  postApi.useGetTagsQuery({limit: limitTags,userId: userTarget});
  const {data: commentsArr, isLoading: isLoadingComments} =  commentApi.useGetCommenstUsersQuery({limit: limitComments,userId: userTarget})


  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      {title === 'Теги' ?
      <img className={styles.moreTags}  onClick={() => toggleTags()} src={icons.showMoreTagsIcon} alt="show More Tags Icon" />
      :  
      <img className={styles.moreTags}  onClick={() => toggleComments()} src={icons.showMoreTagsIcon} alt="show More Tags Icon" />
    }
   

   <ul className={styles.tagsContainer}>
        {!isLoadingTags && tags && title === 'Теги' &&
          tags.map((value: string, index: number) => (
            <li key={index}
            onClick={() => handelClickTag && handelClickTag(value)}
            className={tagValue === value ? styles.itemActive : styles.item}
            >
                <p># {value}</p>
            </li>
          ))}
          </ul>

      <ul className={styles.comentContainer}>
        {!isLoadingComments && commentsArr && title === 'Комментарии' &&
          commentsArr.map((item) => (
            <li className={styles.items} key={item._id}>
              <div className={styles.userInfo}>
                  <Link to={`${item.target?.category}`}>
                <div className={styles.userText}>{item.text}</div>
                </Link>
                
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { CardPostInfo };
