import React from 'react';
import { useSelector } from 'react-redux';
import { commentApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';
import * as ui from 'ui';
import { Form } from 'components';
import { IComments } from 'models';

import styles from './Comments.module.scss';
import { CommentCard } from '../CommentCard';


const FComments = () => {
  
  const [updateCommentApi, {}] = commentApi.useUpdateCommentMutation();
  const [commentText, setCommentText] = React.useState("");
  const [commentError, setCommentError] = React.useState(false);
  const [updateText, setUpdateText] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("");
  const [createdComment, {}] = commentApi.useCreateCommentMutation();
  const [removeComment, {}] = commentApi.useDeleteCommentMutation();
  
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
        const comment = { text: commentText, user }as IComments;
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
        <ui.InputMain
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
      <ui.ButtonMain bgColor="black" onClick={() => handlerCancelUpdate()}>Cancel</ui.ButtonMain>
      }
  <CommentCard updateComment={updateComment} handlerRemoveComment={handlerRemoveComment} auth={auth}/>

       
      
    </div>
  );
};

export const Comments = React.memo(FComments)
