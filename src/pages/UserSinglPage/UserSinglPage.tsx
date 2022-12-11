import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authApi, postApi } from "store/rtkQuery";
import { authAction, selectAuth, selectPosts } from "store/slice";
import { Posts } from "components";
import { useDispatch, useSelector } from "react-redux";

const FUserSinglPage: React.FC = () => {
  const { id } = useParams();
  const { auth, status } = useSelector(selectAuth);
  const userTargetId: string | undefined = id ? id : auth._id;
  const { data: authData, isLoading: isLoadAuth } =
  authApi.useGetUserSinglPageQuery(auth._id, {
    pollingInterval: 10000,
  });
  const { data: userData, isLoading } = authApi.useGetUserSinglPageQuery(
    userTargetId,
    {
      pollingInterval: 10000,
    }
    );
    const postState = useSelector(selectPosts);
  const params = { ...postState, auth: id ? id : auth._id };
  const {
    data: userPosts = [],
    isLoading: isLUserPost,
    isError,
  } = postApi.useGetUserPostQuery(params);
  const { data: totalLength, isLoading: isLength } =
  postApi.useGetUserPostLengthQuery(params);
  const { data: globalSearchPosts = [], isLoading: isGlobalPostLoading } =
  postApi.useGetPostsQuery({ searchPost: postState.search });
  // const [setAuthOnline, {}] = authApi.useSetOnlineMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (!status) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    if (!isLoadAuth && authData) {
      dispatch(authAction.getAutchRequestFriends(authData));
      dispatch(authAction.getAutchOnline());
    } else {
      dispatch(authAction.getAutchOfline());
    }
  }, [authData]);
  
  //  const setStatusAuthOnline = async (status: boolean) => {
    //    await setAuthOnline({status})
    //    .unwrap()
    //    .then(res => console.log(res))
    //    .catch(error => console.log(error))
    //   }
    
    return (
      <div>
      {!isLoading &&
        !isLength &&
        totalLength &&
        !isError &&
        !isLUserPost &&
        userData &&
        !isGlobalPostLoading &&
        globalSearchPosts && (
          <Posts
            globalSearchPosts={globalSearchPosts}
            totalLength={totalLength}
            userId={userTargetId}
            userTarger={userData}
            userPosts={userPosts}
          />
        )}
    </div>
  );
};

export const UserSinglPage = React.memo(FUserSinglPage);
