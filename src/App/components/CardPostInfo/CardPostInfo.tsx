import React from "react";
import { showMoreTagsIcon } from "../../../data/icons";
import { filterTags } from "../../../utils";
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
  handelClickTag?: (value: string) => void
  tagValue?: string
}

const CardPostInfo: React.FC<ITegsCardItem> = ({
  title,
  tags = [],
  comments = [],
  handelClickTag,
  tagValue,
}) => {
  const [showAllTags, setShowAllTags] = React.useState(false)
  const [tagsArr, setTagsArr] = React.useState<string[]>([])

  React.useEffect(() => {
      if (tags) {
      if (showAllTags) {
        setTagsArr(filterTags.filterAllTags(tags))
      } else {
        setTagsArr(filterTags.getFirstFiveTags(tags))
      }
    }
  },[showAllTags])


  return (
    <div className={styles.root}>   
    <img className={styles.moreTags} onClick={()=> setShowAllTags(!showAllTags)} src={showMoreTagsIcon} alt="show More Tags Icon" />
      <div className={styles.title}>{title}</div>

      {tags &&
        tagsArr.map((value: string) => (
          <div 
          onClick={()=> handelClickTag(value)}
          key={value}
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
