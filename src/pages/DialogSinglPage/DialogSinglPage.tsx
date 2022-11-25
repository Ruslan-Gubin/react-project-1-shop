import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authApi, dialogApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';
import { Comments } from 'components';
import { ButtonMain } from 'ui';

import styles from './DialogSinglPage.module.scss';

const FDialogSinglPage = () => {
const {id} = useParams()
const {data: dialogData, isLoading} = dialogApi.useGetOneDialogQuery({id}, {
  pollingInterval: 10000
})
const { auth } = useSelector(selectAuth);
const {data: authData,isLoading: isLoadAuth} = authApi.useGetUserSinglPageQuery(auth._id, {
  pollingInterval: 10000
})
const [addDialogComment, {}] = dialogApi.useAddCommentUpdateMutation()
const [removeDialogComment, {}] = dialogApi.useRemoveCommentUpdateMutation()
const [deleteDialog, {}] = dialogApi.useDeleteDialogMutation()
const navigate = useNavigate()
const {pathname} = useLocation()
const path = pathname.match(/\w+/i)
const categoryName = path && path[0]

React.useEffect(() => {
  if (authData && !isLoadAuth && id && !authData.dialogs.includes(id)) {
    navigate('/post')
  }
},[authData])

const handlerDeleteDialog = async () => {
  if (dialogData && !isLoading && id) {  
    const params = {
      dialogId: id,
      userOneId: dialogData.userOne._id,
      userTwoId: dialogData.userTwo._id,
      commentArr: dialogData.comments
    }
    await deleteDialog(params)
    .unwrap()
    .then(() => {
      navigate('/post') 
    })
    .catch(error => console.log(error))
  }
}

  return (
    <div className={styles.root}>
    {id && categoryName && dialogData && !isLoading && <Comments target={{_id: id, category: categoryName}} removeCommentTarget={removeDialogComment} addComment={addDialogComment} arrComments={dialogData.comments}/>}
    <ButtonMain onClick={() => handlerDeleteDialog()} bgColor='red'>Удалить диалог</ButtonMain>
    </div>
  );
};

export const DialogSinglPage =  React.memo(FDialogSinglPage);