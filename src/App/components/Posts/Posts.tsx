import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as slice from "store/slice";    
import * as components from "components"; 
import * as ui from "ui";    
import { categoryPosts } from "data";
import styles from "./Posts.module.scss";    
import { IPost, IUser } from "models";
import { useNavigate } from "react-router-dom";
import { authApi } from "store/rtkQuery";

interface IFPosts {
  userId: string | undefined
  userTarger: IUser
  userPosts: IPost[]
  totalLength: number
}
     
const FPosts: React.FC<IFPosts> = ({userId, userTarger, userPosts, totalLength}) => {
  const { auth } = useSelector(slice.selectAuth);
  const postState = useSelector(slice.selectPosts);
  const { status } = useSelector(slice.selectAuth);
  const [modalActive, setModalActive] = React.useState<boolean>(false);
  const [setDeleteFriend, {}] = authApi.useSetDeleteFriendMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerDeleteFriend = async (params:{userId: string, guest: string}) => {
    await  setDeleteFriend(params)
    .unwrap()
    .catch(error => console.log(error));
    navigate('/post')
    }

  
  return (
    <div className={styles.root}>
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
        <div className={styles.sticky}>
          <div className={styles.userInfo}>
            {status && <components.CardUser  setModalActive={setModalActive} user={userTarger} />}
          </div>
          <div className={styles.userRequestFriend}>
            {userTarger.requestFriends.length > 0  && userId === auth._id && 
            <components.RequestFriend  user={userTarger}/>
           }
          </div>
            {userTarger.friends.length > 0  && userId === auth._id &&
          <div className={styles.userFriendsList}>
           <components.FriendsList user={userTarger}/>
          </div>
           }
          </div>
        </div>
 
        <ul className={styles.blogs}>
          {status && <components.CardUserInfo userSinglPage={userTarger} />}
          {   
            userPosts.map((obj) => (
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
      {totalLength  > 10 && 
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
       } 

          <components.Modal active={modalActive} setActive={setModalActive}>
            <components.ModalRemoveItem
              text="Удалить пользователя из друзей?"
              confirm={() => handlerDeleteFriend({ userId: userTarger._id, guest: auth._id})}
              cancel={() => setModalActive(false)}
            />
          </components.Modal>


       
    </div>
  );
};

export const  Posts  = React.memo(FPosts);
