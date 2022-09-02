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
  const [img, setImg] = useState("");
  const [createPost, {}] = useCreatePostMutation();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title, img } as IPost).unwrap();
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

export default ModalActiveUtils;

// https://i.ibb.co/2dn0twy/2ffeeee5a646e265383b1b57c8bf0017-l.jpg
// https://i.ibb.co/P9vJ2cP/5b0be04f2d9442027adbcee4f5987200-l.jpg
// https://i.ibb.co/2np17sr/5ba38c3828339b6a37f6aac8725e8dce-x.jpg
// https://i.ibb.co/xCbNkm1/07a518a92e22ea38382e100ef8149f50-l.jpg
// https://i.ibb.co/vjf9xNc/8c9c677e36606c631dab9d2c45bf7a43-l.jpg
// https://i.ibb.co/rw9Cj8L/25dae61690eee2d504b4d64425f58469-l.jpg
// https://i.ibb.co/XsVt5HZ/56a1135b0a32600113affee3ce829093-l.jpg
// https://i.ibb.co/4ZRzPFy/383e326d756410a1d66745a0d794bc81-l.jpg
// https://i.ibb.co/mJbRgg8/2752e51a0ed025c02b0c6947622562b2-l.jpg
// https://i.ibb.co/9phYGLG/067976fb7da6bd6ce4646a8d87377c6f-l.jpg
// https://i.ibb.co/MGJYyVD/71651fbc0634d6ed181db4902d7c91e9-l.jpg
// https://i.ibb.co/hF3WLqj/75922b88b6d414da3e45d97c264b6c02-l.jpg
// https://i.ibb.co/qJ8ZDPR/973286151fc0884d61a121f85d60b6b4-l.jpg
// https://i.ibb.co/S09VZd9/a266a4daca4302e853e801d0c27708ce-l.jpg
// https://i.ibb.co/LSXch86/b74ebd5381dca6f5dd86e3f2de8f379d-l.jpg
// https://i.ibb.co/cgRq4PP/b7854eea8e821b2baa2f04815064bf49-l.jpg
// https://i.ibb.co/ZVnWm7D/cb7874c6bc4b70c36fabd1cb7c687a4b-l.jpg