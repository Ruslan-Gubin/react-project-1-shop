import React, { useState } from "react";
import { IPost } from "../../../models/products";
import { useCreatePostMutation } from "../../../store/rtkQuery/postApi/postApi";
import Form from "../Form";
import {Modal} from "../Modal";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";

const ModalActive:React.FC = React.memo(() => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState<string>("");
  const [createPost, {}] = useCreatePostMutation();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title, img } as IPost).unwrap();
    setText(""), setTitle(""),setImg('');
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setModalActive(false);
    setText(""), setTitle(""),setImg('');
  };

  return (
    <>
      <ButtonMain bgColor="info" onClick={() => setModalActive(true)}>
        Создать пост
      </ButtonMain>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <Form
          titleText={"Форма заполнение поста:"}
          handlerSubmit={handlerSubmit}
          closeForm={(e)=> closeModal(e)}
          watch
        >
          <InputMain
            required={true}
            value={img}
            onChange={(value) => setImg(value)}
            placeholder="Добавить изображения"
          />
          <InputMain
            required={true}
            value={title}
            onChange={(value) => setTitle(value)}
            placeholder="Заголовок"
          />
          <TextareaMain
            rows={5}
            cols={50}
            required={true}
            text={text}
            setText={setText}
            placeholder="Текст "
          />
        </Form>
      </Modal>
    </>
  );
});

export  {ModalActive};