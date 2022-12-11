import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "store/rtkQuery";
import * as slice from "store/slice";
import * as components from "components";
import * as ui from "ui";
import { categoryPosts } from "data";
import { IFPosts } from "models";
import styles from "./Posts.module.scss";

const FPosts: React.FC<IFPosts> = ({
  userId,
  userTarger,
  userPosts,
  totalLength,
  globalSearchPosts,
}) => {
  const { auth, status } = useSelector(slice.selectAuth);
  const postState = useSelector(slice.selectPosts);
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const [setDeleteFriend, {}] = authApi.useSetDeleteFriendMutation();
  const { data: authSearch, isLoading: idLoadAuthSearch } =
    authApi.useGetAuthsQuery({ userFullName: postState.searchUSer });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerDeleteFriend = async (params: {
    userId: string;
    guest: string;
  }) => {
    await setDeleteFriend(params)
      .unwrap()
      .catch((error) => console.log(error));
    navigate("/post");
  };

  return (
    <div
      onClick={() => {
        if (postState.search || postState.searchUSer) {
          dispatch(slice.postAction.setCancelSearchValue());
        }
      }}
      className={styles.root}
    >
      <div className={styles.sort}>
        <components.Categories
          horizontally={true}
          menuValue={postState.category.value}
          data={categoryPosts}
          handlerClick={(value) =>
            dispatch(slice.postAction.setCategoryPost(value))
          }
        />
        <div className={styles.searchInput}>
          {postState.searchValueActive === "searchUser" && (
            <>
              <ui.InputMain
                autofocus={true}
                placeholder="Найти пользователя"
                type="search"
                value={postState.searchUSer}
                onChange={(value) =>
                  dispatch(slice.postAction.setsearchValueUser({ value }))
                }
              />
              <div className={styles.blockSearchItem}>
                {!idLoadAuthSearch && authSearch && authSearch.length > 0 && (
                  <components.BlockSearchItem
                    active={Boolean(authSearch.length)}
                    height={270}
                  >
                    {authSearch.map((item) => (
                      <ul key={item._id}>
                        <components.SearchItem
                          path="user"
                          text={item.fullName}
                          image={item.image.url}
                          id={item._id}
                        />
                      </ul>
                    ))}
                  </components.BlockSearchItem>
                )}
              </div>
            </>
          )}
          {postState.searchValueActive === "searchPost" && (
            <>
              <ui.InputMain
                autofocus={true}
                placeholder="Найти пост"
                type="search"
                value={postState.search}
                onChange={(value) =>
                  dispatch(slice.postAction.setsearchValuePost({ value }))
                }
              />
              <div className={styles.blockSearchItem}>
                {globalSearchPosts && globalSearchPosts.length > 0 && (
                  <components.BlockSearchItem
                    active={Boolean(postState.search.length)}
                    height={270}
                  >
                    {globalSearchPosts.map((item) => (
                      <ul key={item._id}>
                        <components.SearchItem
                          path="post"
                          text={item.title}
                          image={item.user.image.url}
                          id={item._id}
                        />
                      </ul>
                    ))}
                  </components.BlockSearchItem>
                )}
              </div>
            </>
          )}
        </div>

        <div className={styles.btnSearch}>
          <div className={styles.btnsearchUser}>
            <ui.ButtonMain
              bgColor="orange"
              onClick={() =>
                dispatch(
                  slice.postAction.searchValueActive({ value: "searchUser" })
                )
              }
            >
              Найти пользователя
            </ui.ButtonMain>
          </div>
          <ui.ButtonMain
            bgColor="green"
            onClick={() =>
              dispatch(
                slice.postAction.searchValueActive({ value: "searchPost" })
              )
            }
          >
            Найти пост
          </ui.ButtonMain>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.userContainer}>
          <div className={styles.sticky}>
            <div className={styles.userInfo}>
              {status && (
                <components.CardUser
                  setModalActive={setModalActive}
                  user={userTarger}
                />
              )}
            </div>
            <div className={styles.userRequestFriend}>
              {userTarger.requestFriends.length > 0 && userId === auth._id && (
                <components.RequestFriend user={userTarger} />
              )}
            </div>
            {userTarger.friends.length > 0 && userId === auth._id && (
              <div className={styles.userFriendsList}>
                <components.FriendsList user={userTarger} />
              </div>
            )}
          </div>
        </div>

        <ul className={styles.blogs}>
          {status && <components.CardUserInfo userSinglPage={userTarger} />}
          {userPosts.map((obj) => (
            <li key={obj._id}>
              <components.BlogsItemsCard id={obj._id} item={obj} />
            </li>
          ))}
        </ul>
        <div className={styles.blockForSticky}>
          <div className={styles.info}>
            <div className={styles.tegs}>
              <components.CardPostInfo
                userTarget={userId}
                handelClickTag={(value) =>
                  dispatch(slice.postAction.setTagshValue({ value }))
                }
                tagValue={postState.tags}
                title="Теги"
              />
            </div>
            <div className={styles.comments}>
              <components.CardPostInfo
                userTarget={userId}
                title="Комментарии"
              />
            </div>
          </div>
        </div>
      </div>
      {totalLength > 10 && (
        <ui.CustomPagination
          totalCountries={totalLength}
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
      )}

      <components.Modal active={modalActive} setActive={setModalActive}>
        <components.ModalRemoveItem
          text="Удалить пользователя из друзей?"
          confirm={() =>
            handlerDeleteFriend({ userId: userTarger._id, guest: auth._id })
          }
          cancel={() => setModalActive(false)}
        />
      </components.Modal>
    </div>
  );
};

export const Posts = React.memo(FPosts);
