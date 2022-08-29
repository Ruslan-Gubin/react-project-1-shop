import { useState } from "react";
import { IPost } from "../../../../models/products";
import { useCreatePostMutation } from "../../../../store/post/postApi";
import Form from "../../Form";
import Modal from "../../Modal";
import ButtonMain from "../../Ui/ButtonMain";
import InputMain from "../../Ui/InputMain";
import TextareaMain from "../../Ui/TextareaMain";

const ModalActiveUtils = ({}) => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [createPost, {}] = useCreatePostMutation();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title } as IPost).unwrap();
    setText(""), setTitle("");
  };

  const closeModal: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setModalActive(false);
    setText(""), setTitle("");
  };

  return (
    <>
      <ButtonMain bgColor="info" onClick={() => setModalActive(true)}>
        Создать пост
      </ButtonMain>
      <Modal
        handlerSubmit={handlerSubmit}
        active={modalActive}
        setActive={setModalActive}
      >
        <Form
          titleText={"Форма заполнение поста:"}
          setText={setText}
          setTitle={setTitle}
          handlerSubmit={handlerSubmit}
          closeForm={closeModal}
          watch
        >
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

export default ModalActiveUtils;
