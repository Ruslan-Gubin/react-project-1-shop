import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentsApi, postApi } from "../../store/rtkQuery";
import * as slice from "../../store/slice";
import * as components from "../../App/components";
import * as ui from "../../App/components/Ui";
import { categoryPosts, commentsArray } from "../../data";
import styles from "./Posts.module.scss";


const Posts: React.FC = React.memo(() => {
  const postState = useSelector(slice.selectPosts);
  const { data = [], isLoading, isError, refetch:refPosts } = postApi.useGetPostsQuery(postState);
  const { data: totalLength, isLoading: isLength, refetch:refLength } = postApi.useGetlengthQuery(null);
  const { data: comments, isLoading: isLComments,refetch: refComment } = postApi.useFetchGetCommentsQuery(2);
  // const {data: comment, isLoasding: islCom} = commentsApi.
  const { status } = useSelector(slice.selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
        <div>
          <ui.ButtonMain
            onClick={() => navigate(status ? "/add-post" : "/login")}
          >
            Создать пост
          </ui.ButtonMain>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.blogs}>
          {!isLoading && data && !isError &&
            data.map((obj) => (
              <li key={obj._id}>
                <components.BlogsItemsCard id={obj._id} item={obj} />
              </li>
            ))}
        </ul>
        <div className={styles.blockForSticky}>
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
});

export { Posts };
