import React, { useState } from "react";
import {
  useCreatePostMutation,
  useGetOnePostQuery,
  useSetImagUploadMutation,
  useUpdatePostMutation,
} from "../../../store/rtkQuery/postApi/postApi";
import Form from "../Form";
import { ButtonMain, InputMain } from "../Ui";
import SimpleMDE from "react-simplemde-editor";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/slice";
import { Modal } from "../Modal";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CreatePost.module.scss";

const CreatePost: React.FC = React.memo(() => {
  const {id} = useParams()
  const {data,isLoading,isError} = useGetOnePostQuery({id})
  const [updatePost, {}] = useUpdatePostMutation()
  const [createPost, {}] = useCreatePostMutation();
  const [setImageUpload, {}] = useSetImagUploadMutation();
  const { status } = useSelector(selectAuth);
  const [modalActive, setModalActive] = useState(false);

  const [text, setText] = React.useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handlerClickModal = () => {
    status ? setModalActive(true) : navigate("/login");
  };

  const handlerChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event?.preventDefault();
    try {
      const formData = new FormData();
      const file = event.target.files ? event.target.files[0] : false;
      file &&  formData.append("image", file);
     const {data} =  await setImageUpload(formData)
    await  setImageUrl(data.url)
    } catch (error) {
      console.log(error, "Ошибка при загрузке файла!");
    }
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setModalActive(false);
    setTitle("");
  };

  const onChange = React.useCallback((value: string) => {
    setText(value);
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      if (id && !isLoading && !isError) {
        await  updatePost({ text, title, tags, imageUrl ,id})
        imageUrl &&  navigate(`/post/${id}`);
      } else {

        const data = await createPost({ text, title, tags, imageUrl }).unwrap();
        
        const track = data._id;
        navigate(`/post/${track}`);
      }
    } catch (error) {
      console.log("Ошибка при создании статьи", error);
    }
  };

  React.useEffect(() => {
    if (id && !isLoading && !isError) {
      setModalActive(true)
    const {text,title,imageUrl,tags} = data
    setText(text)
    setTitle(title)
    setTags(tags.join(','))
    setImageUrl(imageUrl)
    }
  },[id,isLoading])

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "100px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        deley: 1000,
        uniqueId: "mde-autosave-demo",
      },
    }),
    []
  );

  return (
    <div className={styles.root}>
      <ButtonMain bgColor="info" onClick={() => handlerClickModal()}>
        Создать пост
      </ButtonMain>
      <Modal active={modalActive} setActive={setModalActive}>
        <Form
          titleText={"Форма заполнение поста:"}
          handlerSubmit={onSubmit}
          closeForm={(e) => closeModal(e)}
        >
          <ButtonMain onClick={() => inputFileRef.current?.click()}>
            Добавить фото
          </ButtonMain>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handlerChangeFile}
            hidden
          />
          {imageUrl && (
            <>
              <ButtonMain onClick={() => setImageUrl("")} bgColor="red">
                Удалить
              </ButtonMain>
              <img
                className={styles.previewImage}
                src={`https://pr1-backend.herokuapp.com${imageUrl}`}
                alt="uploaded"
              />
            </>
          )}

          <InputMain
            required={true}
            value={title}
            onChange={(value) => setTitle(value)}
            placeholder="Заголовок"
          />
          <InputMain
            required={true}
            value={tags}
            onChange={(value) => setTags(value)}
            placeholder="Теги"
          />

          <SimpleMDE onChange={onChange} options={options} value={text} />
        </Form>
      </Modal>
    </div>
  );
});

export { CreatePost };
