import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  PostItemsRender } from "../../App/components";
import * as ui from "../../App/components/Ui";
import * as slice from "../../store/slice";
import { paginationCalculatorPage } from "../../utils";
import styles from "./Posts.module.scss";
import { IPost } from "../../models";
import { postApi } from "../../store/rtkQuery";

const Posts: React.FC = React.memo(() => {
  const { isLoading, isError, data = [] } = postApi.useGetPostsQuery(5);
  const { perPage, page } = useSelector(slice.selectPaginationPost);
  const { posts, searchValue } = useSelector(slice.selectPosts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    !isLoading ? dispatch(slice.postAction.setStatePost({ data })) : false;
    if (searchValue) dispatch(slice.paginPostAction.resetPagePost());
  }, [data, searchValue]);

  let pagination = paginationCalculatorPage(posts, page, perPage) as IPost[];

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.forms}>
          <ui.InputMain
            placeholder="Найти пост"
            type="search"
            value={searchValue}
            onChange={(value) => dispatch(slice.postAction.setsearchValuePost({ value }))}
          />
        </div>
        <div className={styles.items}>
          <PostItemsRender
            isError={isError}
            isLoading={isLoading}
            currentPosts={pagination}
          />
        </div>
        <div>
          <ui.CustomPagination
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
      </div>
    </div>
  );
});

export { Posts };
