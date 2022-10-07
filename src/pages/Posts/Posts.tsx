import React, { useState } from "react";
import { ModalActive, Pagination, PostItemsRender } from "../../App/components";
import { InputMain, SearchInput } from "../../App/components/Ui";
import { IPost } from "../../models/products";
import { useGetPostsQuery } from "../../store/post/postApi";
import { paginationCalculatorPage } from "../../utils";
import styles from "./Posts.module.scss";

interface PostFormAdd {
  post?: IPost;
  handlerSubmit?: () => void;
  closeForm?: () => void;
  setText?: string;
  search?: any;
}

const Posts: React.FC<PostFormAdd> = () => {
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [value, setValue] = useState("");
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    if (!isLoading) {
      new Promise((resolve, reject) => {
        resolve(data);
      })
        .then((data) => setPost(data))
        .catch((err) => console.log("Error", err));
    }
  }, [data]);

  const handlerKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {   
      setPost(data.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
      setValue("");
    }
  };

  const pagination = paginationCalculatorPage(post, currentPage, postsPerPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.forms}>
          <SearchInput
            onKeyDown={handlerKeyDown}
            value={value}
            setValue={setValue}
            placeholder="Найти пост"
          />

          <ModalActive />
        </div>
        <div className={styles.items}>
          <PostItemsRender
            isError={isError}
            isLoading={isLoading}
            currentPosts={pagination}
          />
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalCountries={post.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { Posts };
