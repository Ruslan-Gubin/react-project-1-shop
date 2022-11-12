import { IComments } from "App/components/CardPostInfo/CardPostInfo";
import { Form } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { authApi, commentApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { ButtonMain, InputMain } from "ui";

import styles from "./Home.module.scss";

interface IUpdateComments extends IComments {
  updateId: string;
}

const Home: React.FC = React.memo(() => {
  const { data: comments, isLoading: isLoadingComments } =
    commentApi.useGetCommentsQuery("");
  const [commentText, setCommentText] = React.useState("");
  const [commentError, setCommentError] = React.useState(false);
  const [updateText, setUpdateText] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("");
  const [createdComment, {}] = commentApi.useCreateCommentMutation();
  const [removeComment, {}] = commentApi.useDeleteCommentMutation();
  const [updateCommentApi, {}] = commentApi.useUpdateCommentMutation();
  const {auth} = useSelector(selectAuth)

  const handlerAddComment = async () => {
    commentText.length < 3 ? setCommentError(true) : setCommentError(false);
    if (auth && commentText.length >= 3) {
      if (updateText && auth) {
        const comment = { text: commentText, updateId };
        await updateCommentApi(comment)
          .unwrap()
          .then(() => {})
          .catch((error) => console.error("rejected", error));
        setUpdateText(false);
        setCommentText("");
      } else {
        const {token, ...args} = auth
        const user = {...args}
        const comment = { text: commentText, user };
        await createdComment(comment)
          .unwrap()
          .catch((error) => console.error("rejected", error));
        setCommentText("");
      }
    }
  };

  const handlerRemoveComment = async (id: string) => {
    await removeComment(id)
      .unwrap()
      .then(() => {})
      .catch((error) => console.error("rejected", error));
  };

  const updateComment = (item: IComments): void => {
    setCommentText(item.text);
    setUpdateText(true);
    setUpdateId(item._id);
  };

 const handlerCancelUpdate = () => {
  setUpdateText(false);
  setCommentText("");
 }


  return (
    <div className={styles.root}>
      <Form disabled={!auth.fullName} handlerSubmit={() => handlerAddComment()} titleText="Comments">
        <InputMain
          required={true}
          value={commentText}
          placeholder="Комментарии..."
          onChange={(value) => setCommentText(value)}
        />
        {commentError && (
          <p style={{ color: "orange" }}>Введите не менее 3 символов</p>
        )}
      </Form>
      {updateText && 
      <ButtonMain bgColor="black" onClick={() => handlerCancelUpdate()}>Cancel</ButtonMain>
      }
      <ul>
        {!isLoadingComments &&
          comments?.map((item) => (
            <div key={item._id}>
              <li style={{ fontSize: "1rem", color: "white" }}>
                {item.user.fullName}
              </li>
              <li>
                <img
                  style={{ weight: 50, height: 50, borderRadius: "50%" }}
                  src={item?.user.image.url}
                  alt="user image url"
                />
              </li>
              <li style={{ fontSize: "2rem", color: "orange" }}>{item.text}</li>
            {auth?._id === item.user._id &&
              <div style={{ display: "flex" }}>
                <div style={{ width: 150 }}>
                  <ButtonMain
                  onClick={() => updateComment(item)}
                  bgColor="green"
                  >
                    update
                  </ButtonMain>
                </div>
                <div style={{ width: 150 }}>
                  <ButtonMain
                    bgColor="red"
                    onClick={() => handlerRemoveComment(item._id)}
                  >
                    remove
                  </ButtonMain>
                </div>
              </div>
                  }
            </div>
          ))}
      </ul>
    </div>
  );
});

export { Home };
export type { IUpdateComments };
