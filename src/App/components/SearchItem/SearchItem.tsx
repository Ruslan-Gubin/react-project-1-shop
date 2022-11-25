import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAction, selectAuth } from "store/slice";

import styles from "./BlockSearchItem.module.scss";

interface ISearchItem {
  text: string
  image: string
  id: string
  path: string
}

const FSearchItem:React.FC<ISearchItem> = ({ text, image ,id, path}) => {
  const {auth} = useSelector(selectAuth)
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const handlerClickNavigate = (id: string) => {
   dispatch(postAction.setCancelSearchValue())
  if (id === auth._id) {
    navigate(`/post/`)
  } else {
    navigate(`/${path}/${id}`)
  }
 }

  return ( 
    <li  className={styles.item} onClick={()=> handlerClickNavigate(id)}>
        <img src={image} alt="item image" className={styles.image} />
        <span className={styles.fullname}>{text}</span>
       </li>
  );
};

export const SearchItem = React.memo(FSearchItem);
