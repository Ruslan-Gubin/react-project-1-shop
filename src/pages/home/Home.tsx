import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "../../store/rtkQuery";
import * as slice from "../../store/slice";
import * as components from "../../App/components";
import { IPost } from "../../models/iPost";
import { ButtonMain, CustomPagination, InputMain } from "../../App/components/Ui";
import {  paginationCalculatorPage } from "../../utils";
import { commentsArray, sortCategoryName } from "../../data";
import styles from "./Home.module.scss";


const Home:React.FC = React.memo(() => {
  const { data = [], isLoading, isError } = postApi.useGetPostsQuery('');
  const { perPage, page } = useSelector(slice.selectPaginationPost);
  const { posts, searchValue , menuValue, tagsSearchValue} = useSelector(slice.selectPosts);
  const { status } = useSelector(slice.selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isLoading && !isError) {
      dispatch(slice.postAction.setStatePost({ data }))
      if (searchValue || tagsSearchValue) dispatch(slice.paginPostAction.resetPagePost());    
    }
  },[isLoading, searchValue, menuValue, tagsSearchValue])
 
  let pagination = React.useMemo(()=> {
      return  paginationCalculatorPage(posts, page, perPage) as IPost[]
  },[posts,page,posts]) 

  return (
    <div className={styles.root}>
      {isError && <div>Error...</div>}
      <div className={styles.sort}>
        <components.Categories
          horizontally={true}
          menuValue={menuValue}
          data={sortCategoryName}
          handlerClick={(item) => dispatch(slice.postAction.setCategoryPost({item}))}
        />
        <InputMain
            placeholder="Найти пост"
            type="search"
            value={searchValue}
            onChange={(value) => dispatch(slice.postAction.setsearchValuePost({ value }))}
          />
        <div>
      <ButtonMain onClick={()=> navigate(status ? '/add-post' : '/login')}>Создать пост</ButtonMain>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.blogs}>
          {!isLoading &&
            pagination.map((obj) => (
              <li key={obj._id}>
                <components.BlogsItemsCard 
                id={obj._id}
                item={obj} 
                />
              </li>
            ))}
        </ul>
        <div className={styles.blockForSticky}>
          <div className={styles.info}>
            <div className={styles.tegs}>
               {!isLoading && data &&
              <components.CardPostInfo 
              handelClickTag={(value)=> dispatch(slice.postAction.setTagsSearchValue({value}))}
              tagValue={tagsSearchValue} 
              tags={ data} 
              title="Теги" 
              />
            }
              
            </div>
            <div className={styles.comments}>
              <components.CardPostInfo
                comments={commentsArray}
                title="Комментарии"
              />
            </div>
          </div>
        </div>
      </div>
          <CustomPagination
            totalCountries={posts.length}
            counterPerPage={perPage}
            currentPage={page}
            clickNumber={(pageNumber: number) =>
              dispatch(slice.paginPostAction.setPaginatePost({ pageNumber }))
            }
            prevPage={() => dispatch(slice.paginPostAction.setPrevPagePost())}
            nextPage={(page: number) => dispatch(slice.paginPostAction.setNextPagePost(page))}
          />
    </div>
  );
});

export { Home };
