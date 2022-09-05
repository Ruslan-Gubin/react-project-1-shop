import { FC, useState } from "react";
import { IPost } from "../../../models/products";
import { useGetPostsQuery } from "../../../store/post/postApi";
import paginationCalculatorPage from "../../../utils/paginationCalculatorPage";
import Pagination from "../Pagination";
import InputMain from "../Ui/InputMain";
import {
  ModalActiveUtils,
  PostItemsRender,
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
  const [ postsPerPage] = useState(12)
  const [value, setValue] = useState('');


  const filtresPosts =  data.filter(item => {
     return item.title.toLowerCase().includes(value.toLowerCase())
   })

  
  const pagination =  paginationCalculatorPage(filtresPosts,currentPage,postsPerPage)

  return (
    <div className="post-main container">
      <div className="post-main__forms">
<InputMain text={value} setText={setValue} placeholder='Найти'/>    

        <ModalActiveUtils />
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
  );
};

export default PostConteiner;
