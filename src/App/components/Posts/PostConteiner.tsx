import { FC,  useState } from "react";
import { IPost } from "../../../models/products";
import { useGetPostsQuery } from "../../../store/post/postApi";
import paginationCalculatorPage from "../../../utils/paginationCalculatorPage";
import Pagination from "../Pagination";
import {
  ModalActiveUtils,
  PostItemsRender,
  PostSearchUtils,
} from "./PostContairerUtils";

interface PostFormAdd {
  post?: IPost;
  handlerSubmit?: () => void;
  closeForm?: () => void;
  setText?: string;
  search?: any;
}


const PostConteiner: FC<PostFormAdd> = () => { 
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const [currentPage, setCurrentPage] = useState(1)
  const [ postsPerPage] = useState(8)

  const testPagination =  paginationCalculatorPage(data,currentPage,postsPerPage)


  return (
    <div className="post-main">
      <div className="post-main__forms">
        <PostSearchUtils />
        <ModalActiveUtils />
      </div>
      <div className="post-main__items">
      <PostItemsRender 
      isError={isError} 
      isLoading={isLoading} 
      currentPosts={testPagination}
      />
      </div>
      <div className="post-main__pagination">
  <Pagination 
  currentPage={currentPage}
  postsPerPage={postsPerPage} 
  totalCountries={data.length}
  setCurrentPage={setCurrentPage}
  />
  </div>



    </div>
  );
};

export default PostConteiner;
