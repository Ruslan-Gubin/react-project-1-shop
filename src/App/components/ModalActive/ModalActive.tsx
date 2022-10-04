import { useState } from "react";
import { IPost } from "../../../models/products";
import { useCreatePostMutation } from "../../../store/post/postApi";
import Form from "../Form";
import Modal from "../Modal";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";

const ModalActive = ({}) => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [createPost, {}] = useCreatePostMutation();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title, img } as IPost).unwrap();
    setText(""), setTitle(""),setImg('');
  };

  const closeModal: React.FormEventHandler<HTMLFormElement> = (e) => {
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
          closeForm={closeModal}
          watch
        >
          <InputMain
            required={true}
            name="img"
            text={img}
            setText={setImg}
            placeholder="Добавить изображения"
          />
          <InputMain
            required={true}
            name="text"
            text={title}
            setText={setTitle}
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
};

export  {ModalActive};