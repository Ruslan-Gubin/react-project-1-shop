import React from "react";
import { postApi } from "../../store/rtkQuery";

import styles from "./Home.module.scss";

const Home: React.FC = React.memo(() => {
  const { data: comments, isLoading: isLComments,refetch: refComment } = postApi.useFetchGetCommentsQuery(2);
  // const {data: comment, isLoasding: islCom} = commentsApi.



  return (
  <div className={styles.root}>
    <ul>
      {comments?.map(item => (
        <div key={item._id}>
        <li>{item.text}</li>
        {/* <img style={{width: 50,height: 50,borderRadius: '50%'}} src={item.user.image.url} alt="avatar image" /> */}
        {/* <p>{item.user.fullName}</p> */}
        </div>
      ))}
    </ul>
  </div>
  );
});

export { Home };
