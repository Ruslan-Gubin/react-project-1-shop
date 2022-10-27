import React, { useState } from "react";
import * as postSlice from "../../../store/rtkQuery";
import { ButtonMain, Editor, InputMain } from "../Ui";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/slice";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CreatePost.module.scss";

const CreatePost: React.FC = React.memo(() => {
  const { id } = useParams();
  const { data, isLoading, isError } = postSlice.useGetOnePostQuery({ id });
  const [updatePost, {}] = postSlice.useUpdatePostMutation();
  const [createPost, {}] = postSlice.useCreatePostMutation();
  const [setImageUpload, {}] = postSlice.useSetImagUploadMutation();
  const { status } = useSelector(selectAuth);

  const [text, setText] = React.useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handlerChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event?.preventDefault();
    try {
      const formData = new FormData();
      const file = event.target.files ? event.target.files[0] : false;
      file && formData.append("image", file);
      const { data } = await setImageUpload(formData);
      await setImageUrl(data.url);
    } catch (error) {
      console.log(error, "Ошибка при загрузке файла!");
    }
  };

  const onSubmitAddPost = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      if (id && !isLoading && !isError) {
        await updatePost({ text, title, tags, imageUrl, id });
        imageUrl && navigate(`/post/${id}`);
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
      const { text, title, imageUrl, tags } = data;
      setText(text);
      setTitle(title);
      setTags(tags.join(","));
      setImageUrl(imageUrl);
    }
  }, [id, isLoading]);

  const handlerClear = () => {
    if (text) setText("");
    if (title) setTitle("");
    if (tags) setTags("");
    if (imageUrl) setImageUrl("");
  };

  return (
    <div className={styles.root}>
      <div className={styles.buttonImage}>
        {imageUrl ? (
          <ButtonMain onClick={() => setImageUrl("")} bgColor="red">
            Удалить фото
          </ButtonMain>
        ) : (
          <ButtonMain onClick={() => inputFileRef.current?.click()}>
            Добавить фото
          </ButtonMain>
        )}
      </div>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handlerChangeFile}
        hidden
      />
      {imageUrl && (
        <img
          className={styles.previewImage}
          src={`https://pr1-backend.herokuapp.com${imageUrl}`}
          alt="uploaded"
        />
      )}

      <InputMain
        required={true}
        value={title}
        onChange={(value) => setTitle(value)}
        placeholder="Заголовок..."
      />
      <InputMain
        required={true}
        value={tags}
        onChange={(value) => setTags(value)}
        placeholder="Теги..."
      />
      <Editor value={text} onChange={(value) => setText(value)} />

      <ButtonMain onClick={(event) => onSubmitAddPost(event)}>
        Опубликовать
      </ButtonMain>
      <ButtonMain onClick={() => handlerClear()} bgColor="nobg">
        Очистить
      </ButtonMain>
    </div>
  );
});

export { CreatePost };
