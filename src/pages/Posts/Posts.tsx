import { FC, useState } from "react";
import { ModalActive, Pagination, PostItemsRender } from "../../App/components";
import { InputMain } from "../../App/components/Ui";
import { IPost } from "../../models/products";
import { useGetPostsQuery } from "../../store/post/postApi";
import { paginationCalculatorPage } from "../../utils";

interface PostFormAdd {
  post?: IPost;
  handlerSubmit?: () => void;
  closeForm?: () => void;
  setText?: string;
  search?: any;
}

const Posts: FC<PostFormAdd> = () => {
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [value, setValue] = useState("");

  const filtresPosts = data.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  const pagination = paginationCalculatorPage(
    filtresPosts,
    currentPage,
    postsPerPage
  );

  return (
    <div className="post-page">
      <div className="post-main container">
        <div className="post-main__forms">
          <InputMain text={value} setText={setValue} placeholder="Найти" />

          <ModalActive />
        </div>
        <div className="post-main__items">
          <PostItemsRender
            isError={isError}
            isLoading={isLoading}
            currentPosts={pagination}
          />
        </div>
        <div className="post-main__pagination">
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalCountries={filtresPosts.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export { Posts };
