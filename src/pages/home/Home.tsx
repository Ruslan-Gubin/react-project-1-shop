import React from "react";
import { useDispatch } from "react-redux";
import * as components from "../../App/components";
import { commentsArray, sortCategoryName } from "../../data";
import { useGetPostsQuery } from "../../store/rtkQuery";
import { useGetTagsQuery } from "../../store/rtkQuery/postApi/postApi";
import styles from "./Home.module.scss";

interface IuseGetTagsQuery {
  data: string[]
  isLoading: boolean
  isError: boolean
}

const Home = React.memo(() => {
  const [menuValue, setMenuValue] = React.useState(sortCategoryName[0]);
  const { data = [], isLoading, isError } = useGetPostsQuery(5);
  const { data: tags, isLoading:isLoadingTags, isError:isErrorTags } = useGetTagsQuery<IuseGetTagsQuery>('');
  const dispatch = useDispatch();
  


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
      </div>
      <div className={styles.container}>
        <ul className={styles.blogs}>
          {!isLoading &&
            data.map((obj) => (
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
              <components.CardPostInfo tags={tags} title="Теги" />
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
    </div>
  );
});

export { Home };
