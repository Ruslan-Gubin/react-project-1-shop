import React from "react";
import { CardUser, CardUserInfo } from "../../App/components";
import { authApi, postApi } from "../../store/rtkQuery";

import styles from "./Home.module.scss";

const Home: React.FC = React.memo(() => {
  const {data: getUsers, isLoading} = authApi.useGetAuthsQuery(null)

  const { data: comments, isLoading: isLComments,refetch: refComment } = postApi.useFetchGetCommentsQuery(2);
  // const {data: comment, isLoasding: islCom} = commentsApi.

  React.useEffect(() => {
    if (!isLoading) {
      console.log(getUsers);
    }
  },[getUsers])

  return (
  <div className={styles.root}>
    <ul>
    {getUsers && getUsers?.map(user => (
      <li key={user.email}>
        <div>
        {user.fullName}
        {user.email}
        <img style={{width: 100}} src={user.image.url} alt="image user" />

        </div>
      
      </li>
))}
    </ul>
  
    {/* <ul>
      {comments?.map(item => (
        <div key={item._id}>
        <li>{item.text}</li>
        <img style={{width: 50,height: 50,borderRadius: '50%'}} src={item.user.image.url} alt="avatar image" />
        <p>{item.user.fullName}</p>
        </div>
      ))}
    </ul> */}
  </div>
  );
});

export { Home };
