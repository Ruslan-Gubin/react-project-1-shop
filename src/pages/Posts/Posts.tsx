import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "store/rtkQuery";
import * as slice from "store/slice";    
import * as components from "components"; 
import * as ui from "ui";    
import { categoryPosts, commentsArray } from "data";
import styles from "./Posts.module.scss";     

          
const FPosts: React.FC = () => {
  const postState = useSelector(slice.selectPosts);
  const {data = [],isLoading,isError} = postApi.useGetPostsQuery(postState);
  const {data: totalLength,isLoading: isLength} = postApi.useGetlengthQuery(null);
  const { status } = useSelector(slice.selectAuth);
  const dispatch = useDispatch();
 

  return (
    <div className={styles.root}>
      {isError && <div>Error...</div>}
      <div className={styles.sort}>
        <components.Categories
          horizontally={true}
          menuValue={postState.category}
          data={categoryPosts}
          handlerClick={(value) =>
            dispatch(slice.postAction.setCategoryPost({ value }))
          }
        />
         <ui.InputMain
          placeholder="Найти пост"
          type="search"
          value={postState.search}
          onChange={(value) =>
            dispatch(slice.postAction.setsearchValuePost({ value }))
          }
        />
      </div>
      <div className={styles.container}>
        <div className={styles.userContainer}>
          <div className={styles.userInfo}>
            {status && <components.CardUser />}
          </div>
        </div>
 
        <ul className={styles['blogs']}>
          {status && <components.CardUserInfo />}
          {!isLoading &&
            data &&
            !isError &&
            data.map((obj) => (
              <li key={obj._id}>
                <components.BlogsItemsCard id={obj._id} item={obj} />
              </li>
            ))}
        </ul>
        <div className={styles["blockForSticky"]}>
          <div className={styles.info}>
            <div className={styles.tegs}>
              {!isLoading && data && (
                <components.CardPostInfo
                  handelClickTag={(value) =>
                    dispatch(slice.postAction.setTagshValue({ value }))
                  }
                  tagValue={postState.tags}
                  title="Теги"
                />
              )}
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
      <ui.CustomPagination
        totalCountries={!isLength && totalLength}
        counterPerPage={postState.perpage}
        currentPage={postState.page}
        clickNumber={(pageNumber: number) =>
          dispatch(slice.postAction.setPaginate({ pageNumber }))
        }
        prevPage={() => dispatch(slice.postAction.setPrevPage())}
        nextPage={(page: number) =>
          dispatch(slice.postAction.setNextPage(page))
        }
      />
    </div>
  );
};

export const  Posts  = React.memo(FPosts);
