import React from "react";
import { useSelector } from "react-redux";
import { commentApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import * as ui from "ui";
import { Form, Modal, ModalRemoveItem } from "components";
import { IComments } from "models";
import { CommentCard } from "../CommentCard";

import styles from "./Comments.module.scss";
import { useCoordinates } from "hooks";

interface IFComments {
  arrComments: string[];
  addComment: any;
  removeCommentTarget: any;
  target: {
    _id: string;
    category: string;
  };
}

const FComments: React.FC<IFComments> = ({addComment, removeCommentTarget, target, arrComments,
}) => {
  const [updateCommentApi, {}] = commentApi.useUpdateCommentMutation();
  const [commentText, setCommentText] = React.useState("");
  const [commentError, setCommentError] = React.useState(false);
  const [updateText, setUpdateText] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("");
  const [createdComment, {}] = commentApi.useCreateCommentMutation();
  const [removeComment, {}] = commentApi.useDeleteCommentMutation();
  const [commentActiveModal, setCommentActive] = React.useState<boolean>(false);
  const [removeCommentModal, setRemoveCommentModal] = React.useState("");
  const { auth } = useSelector(selectAuth);
  const [myRef, x, y] = useCoordinates();

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
        const comment = {
          text: commentText,
          user,
          target: target,
        } as IComments;
        await createdComment(comment)
          .unwrap()
          .then(
            async (data) =>
              await addComment({ targetId: target._id, commentId: data._id })
          )
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
        removeCommentTarget({ targetId: target._id, newArrComments });
      })
      .catch((error) => console.error("rejected", error));
    setRemoveCommentModal("");
  };

  const updateComment = (item: IComments): void => {
    window.scrollTo(x, y);
    setCommentActive(true);
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
      <div ref={myRef}></div>
      <ui.ButtonMain
        onClick={() => setCommentActive(!commentActiveModal)}
        bgColor="black"
      >
        {!commentActiveModal ? "Добавить комментарий" : "Скрыть"}
      </ui.ButtonMain>
      {commentActiveModal && (
        <Form
          closeForm={() => commentText.length && handlerCancelUpdate()}
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
