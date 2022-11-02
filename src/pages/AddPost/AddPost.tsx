import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import * as ui from '../../App/components/Ui';
import { postApi } from '../../store/rtkQuery';
import { postAction, selectAuth, selectPosts } from '../../store/slice';
import styles from './AddPost.module.scss';

const AddPost = () => {
  const { id } = useParams<string>();
  const {postUpdate} = useSelector(selectPosts) 
  const [updatePost, {}] = postApi.useUpdatePostMutation();
  const [createPost, {}] = postApi.useCreatePostMutation();
  
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [image, setImage] = React.useState<string | ArrayBuffer>("");
  
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()
  const { status } = useSelector(selectAuth);

  React.useEffect(() => {
    if (!status) navigate("/login");
  }, [status]);

  const handlerChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : false;
    file && setFileToBase(file);
  };

  const setFileToBase = (file: File) => {
    try {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onloadend = () => {
        if (render.result) {
          setImage(render.result);
        }
      };
    } catch (error) {
      console.log(error, "Ошибка при загрузке файла!");
    }
  };

  const onSubmitAddPost = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      if (id ) {
        await updatePost({ text, title, tags, image, id });
        image && navigate(`/post/${id}`);
      } else if (!id) {
        const data = await createPost({ text, title, tags, image }).unwrap();

        if (data._id) {
          const track = data._id;
          navigate(`/post/${track}`);
        }
      }
      dispatch(postAction.setUpdatePostRemove())
    } catch (error) {
      console.log("Ошибка при создании статьи", error);
    }
  };

  React.useEffect(() => {
    if (postUpdate  &&  pathname !== '/add-post') {
        const { text, title, image, tags } = postUpdate;
        setText(text);
        setTitle(title);
        setTags(tags.join(","));
        setImage(image.url);
      }
  }, [postUpdate]);

  const handlerClear = () => {
    if (text) setText("");
    if (title) setTitle("");
    if (tags) setTags("");
    if (image) setImage("");
  };
  
  return (
    <div className={styles.root}>
    <div className={styles.buttonImage}>
      {image ? (
        <ui.ButtonMain onClick={() => setImage("")} bgColor="red">
          Удалить фото
        </ui.ButtonMain>
      ) : (
        <ui.ButtonMain onClick={() => inputFileRef.current?.click()}>
          Добавить фото
        </ui.ButtonMain>
      )}
    </div>
    <input
      ref={inputFileRef}
      type="file"
      onChange={handlerChangeFile}
      hidden
    />
    {image && (
      <img
        className={styles.previewImage}
        src={image ? image : ""}
        alt="uploaded"
      />
    )}
    <ui.InputMain
      required={true}
      value={title}
      onChange={(value) => setTitle(value)}
      placeholder="Заголовок..."
    />
    <ui.InputMain
      required={true}
      value={tags}
      onChange={(value) => setTags(value)}
      placeholder="Теги..."
    />
    <ui.Editor value={text} onChange={(value) => setText(value)} />
    {title !== "" && image !== "" && text !== "" && tags !== "" ? 
      <ui.ButtonMain onClick={(event) => onSubmitAddPost(event)}>
        Опубликовать
      </ui.ButtonMain>
      : <ui.ButtonMain bgColor="black">Заполните все поля !!!</ui.ButtonMain>
    }
    <ui.ButtonMain onClick={() => handlerClear()} bgColor="nobg">
      Очистить
    </ui.ButtonMain>
  </div>
  );
};

export {AddPost};