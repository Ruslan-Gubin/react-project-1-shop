import React from "react";
import { postApi } from "store/rtkQuery";
import { showMoreTagsIcon } from "data/icons";
import { useToggle } from "hooks";
import { IComments } from "models";

import styles from "./CardPostInfo.module.scss";


interface ITegsCardItem {
  title: string;
  tags?: string[];
  comments?: IComments[];
  handelClickTag?: (value: string) => void 
  tagValue?: string
}

const CardPostInfo: React.FC<ITegsCardItem> = ({
  title,
  comments = [],
  handelClickTag,
  tagValue,
}) => {
  const [value, toggle] = useToggle(5, '')
  const {data: tags, isLoading: isLoadingTags} = postApi.useGetTagsQuery(value)


  return (
    <div className={styles.root}>   
    <img className={styles.moreTags} onClick={toggle} src={showMoreTagsIcon} alt="show More Tags Icon" />
      <div className={styles.title}>{title}</div>
      { !isLoadingTags && tags &&
        tags.map((value: string, index: number) => (
          <div 
          onClick={()=> (handelClickTag && handelClickTag(value))}
          key={index}
          className={tagValue === value ? styles.itemActive : styles.item  }  
          >
           <p># {value}</p> 
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
