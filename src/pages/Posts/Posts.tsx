import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalActive, PostItemsRender } from "../../App/components";
import { CustomPagination, SearchInput } from "../../App/components/Ui";
import * as slice from "../../store/slice";
import { useGetPostsQuery } from "../../store/rtkQuery";
import { paginationCalculatorPage } from "../../utils";
import styles from "./Posts.module.scss";
import { IPost } from "../../models/products";

const Posts: React.FC = React.memo(() => {
  const { isLoading, isError, data = [] } = useGetPostsQuery(5);
  const { perPage, page } = useSelector(slice.selectPaginationPost);
  const { post, searchValue } = useSelector(slice.selectPosts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    !isLoading ? dispatch(slice.setStatePost({ data })) : false;
    if (searchValue) dispatch(slice.resetPagePost());
  }, [data, searchValue]);

  let pagination = paginationCalculatorPage(post, page, perPage) as IPost[];

  return (
    <div className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.forms}>
          <SearchInput
            register={searchValue}
            onChange={(value: string) =>
              dispatch(slice.setsearchValuePost({ value }))
            }
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
          <CustomPagination
            totalCountries={post.length}
            counterPerPage={perPage}
            currentPage={page}
            clickNumber={(pageNumber: number) =>
              dispatch(slice.setPaginatePost({ pageNumber }))
            }
            prevPage={() => dispatch(slice.setPrevPagePost())}
            nextPage={(page: number) => dispatch(slice.setNextPagePost(page))}
          />
        </div>
      </div>
    </div>
  );
});

export { Posts };
