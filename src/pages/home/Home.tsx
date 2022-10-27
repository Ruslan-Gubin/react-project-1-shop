import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as components from "../../App/components";
import { ButtonMain, CustomPagination, InputMain } from "../../App/components/Ui";
import { commentsArray, sortCategoryName } from "../../data";
import { IPost } from "../../models";
import { useGetPostsQuery } from "../../store/rtkQuery";
import { useGetTagsQuery } from "../../store/rtkQuery/postApi/postApi";
import { resetPagePost, selectPaginationPost, selectPosts, setNextPagePost, setPaginatePost, setPrevPagePost, setsearchValuePost, setStatePost } from "../../store/slice";
import { paginationCalculatorPage } from "../../utils";
import styles from "./Home.module.scss";

interface IuseGetTagsQuery {
  data: string[]
  isLoading: boolean
  isError: boolean
}

const Home = React.memo(() => {
  const [menuValue, setMenuValue] = React.useState(sortCategoryName[0]);
  const { data = [], isLoading, isError } = useGetPostsQuery(5);
  const { perPage, page } = useSelector(selectPaginationPost);
  const { data: tags, isLoading:isLoadingTags, isError:isErrorTags } = useGetTagsQuery<IuseGetTagsQuery>('');
  const { posts, searchValue } = useSelector(selectPosts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isLoading && !isError) {
      dispatch(setStatePost({ data }))
      if (searchValue) dispatch(resetPagePost());
    }
  },[isLoading, searchValue])
  
  let pagination = paginationCalculatorPage(posts, page, perPage) as IPost[];
  
  return (
    <div className={styles.root}>
      {isError && <div>Error...</div>}
      <div className={styles.sort}>
        <components.Categories
          horizontally={true}
          menuValue={menuValue}
          data={sortCategoryName}
          handlerClick={(item) => setMenuValue(item)}
        />
        <InputMain
            placeholder="Найти пост"
            type="search"
            value={searchValue}
            onChange={(value) => dispatch(setsearchValuePost({ value }))}
          />
        <div>
         <Link to={'/add-post'}>
      <ButtonMain>Создать пост</ButtonMain>
         </Link>
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
              {!isLoadingTags && 
              <components.CardPostInfo  tags={tags} title="Теги" />
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
              dispatch(setPaginatePost({ pageNumber }))
            }
            prevPage={() => dispatch(setPrevPagePost())}
            nextPage={(page: number) => dispatch(setNextPagePost(page))}
          />
    </div>
  );
});

export { Home };
