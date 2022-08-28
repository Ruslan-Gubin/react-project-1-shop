import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../../models/products";
import {
  useCreatePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../../store/post/postApi";
import CustomLink from "../CustomLink";
import Form from "../Form";
import Modal from "../Modal";
import ButtonMain from "../Ui/ButtonMain";
import FormSearch from "../Ui/FormSearch";
import InputMain from "../Ui/InputMain";
import PostsItem from "./PostsItem";

interface PostFormAdd {
  post: IPost;
  handlerSubmit: (post: IPost) => void;
}

const PostConteiner = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [modalActive, setModalActive] = useState(true);
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [createPost, {}] = useCreatePostMutation();
  const [updatePost, {}] = useUpdatePostMutation();

  const postQuery = searchParams.get("post") || "";

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createPost({ text, title } as IPost).unwrap();
    setText(""), setTitle("");
  };

  const handletSubmitSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target;
    let query = form.search.value;
    setSearchParams({ post: query.toLowerCase() });
    form.search.value = "";
  };

  const closeModal: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setModalActive(false)
    setText(""), setTitle("");
  }

  return (
    <div className="post-main">
      <div className="post-main__forms">
        <FormSearch name='search' placeholder='Поиск' submitImput={handletSubmitSearch}>
        <InputMain  setText={setTitle} name="search" placeholder='поиск'/>
        <ButtonMain bgColor='green'>Найти</ButtonMain>
          </FormSearch>
        <ButtonMain bgColor="info" onClick={() => setModalActive(true)}>
          Создать пост
        </ButtonMain>
        <Modal
          handlerSubmit={handlerSubmit}
          active={modalActive}
          setActive={setModalActive}
        >
          <Form
            titleText={'Форма заполнение поста:'}
            setText={setText}
            setTitle={setTitle}
            handlerSubmit={handlerSubmit}
            closeForm={closeModal}
            >
              <InputMain name="text" text={title} setText={setTitle} placeholder="Заголовок" />
        <textarea className='modal-body__value-text' placeholder="Comment text..."  value={text} onChange={(e) => setText(e.target.value)}/>
          </Form>
        </Modal>
      </div>

      {isLoading ? <h2>Loading...</h2> : isError}
      {isError && <h2>Error</h2>}
      {data
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (
          <CustomLink key={post._id} to={`/post/${post._id}`}>
            <PostsItem key={post._id} post={post} />
          </CustomLink>
        ))}
    </div>
  );
};

export default PostConteiner;
