import React from "react";
import { useSelector } from "react-redux";
import { commentApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import * as ui from "ui";
import { Form, Modal, ModalRemoveItem } from "components";
import { IComments } from "models";
import { CommentCard } from "../CommentCard";

import styles from "./Comments.module.scss";

interface IFComments {
  arrComments: string[];
  addComment: any;
  removeCommentTarget: any;
  idTarget: string;
}

const FComments: React.FC<IFComments> = ({addComment, removeCommentTarget, idTarget, arrComments}) => {

  const [updateCommentApi, {}] = commentApi.useUpdateCommentMutation();
  const [commentText, setCommentText] = React.useState("");
  const [commentError, setCommentError] = React.useState(false);
  const [updateText, setUpdateText] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("");
  const [createdComment, {}] = commentApi.useCreateCommentMutation();
  const [removeComment, {}] = commentApi.useDeleteCommentMutation();
  const [addCommentActive, setAddCommentActive] = React.useState(false);
  const [removeCommentModal, setRemoveCommentModal] = React.useState("");
  const { auth } = useSelector(selectAuth);

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
        const { token, ...args } = auth;
        const user = { ...args };
        const comment = { text: commentText, user } as IComments;
        await createdComment(comment)
          .unwrap()
          .then((data) => addComment({ postId: idTarget, commentId: data._id }))
          .catch((error) => console.error("rejected", error));
        setCommentText("");
      }
    }
  };

  const handlerRemoveComment = async (id: string) => {
    await removeComment(id)
      .unwrap()
      .then(() => {
        const newArrComments = arrComments.filter((item) => item !== id);
        removeCommentTarget({ postId: idTarget, newArrComments });
      })
      .catch((error) => console.error("rejected", error));
    setRemoveCommentModal("");
  };

  const updateComment = (item: IComments): void => {
    setCommentText(item.text);
    setUpdateText(true);
    setUpdateId(item._id);
  };

  const handlerCancelUpdate = () => {
    setUpdateText(false);
    setCommentText("");
  };

  return (
    <div className={styles.root}>
      <ui.ButtonMain
        onClick={() => setAddCommentActive(!addCommentActive)}
        bgColor="black"
      >
        {!addCommentActive ? "Добавить комментарий" : "Скрыть"}
      </ui.ButtonMain>
      {addCommentActive && (
        <Form
          closeForm={() => handlerCancelUpdate()}
          disabled={!auth.fullName}
          handlerSubmit={() => handlerAddComment()}
        >
          <ui.TextareaMain
            placeholder="Добавьте комментарий..."
            text={commentText}
            setText={(value) => setCommentText(value)}
            rows={5}
          />
          {commentError && (
            <p style={{ color: "orange" }}>Введите не менее 3 символов</p>
          )}
        </Form>
      )}
      {arrComments && arrComments.length > 0 && (
        <CommentCard
          arrComments={arrComments}
          updateComment={updateComment}
          setRemoveCommentModal={setRemoveCommentModal}
          auth={auth}
        />
      )}
      <Modal active={removeCommentModal} setActive={setRemoveCommentModal}>
        <ModalRemoveItem
          text="Вы действительно хотите удалить этот комментарий?"
          confirm={() => handlerRemoveComment(removeCommentModal)}
          cancel={() => setRemoveCommentModal("")}
        />
      </Modal>
    </div>
  );
};

export const Comments = React.memo(FComments);
