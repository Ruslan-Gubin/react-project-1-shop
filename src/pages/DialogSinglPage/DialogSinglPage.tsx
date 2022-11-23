import { Comments } from 'components';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { dialogApi } from 'store/rtkQuery';

import styles from './DialogSinglPage.module.scss';

const FDialogSinglPage = () => {
const {id} = useParams()
const {data: diagolData, isLoading} = dialogApi.useGetOneDialogQuery({id}, {
  pollingInterval: 10000
})
const [addDialogComment, {}] = dialogApi.useAddCommentUpdateMutation()
const [removeDialogComment, {}] = dialogApi.useRemoveCommentUpdateMutation()

const {pathname} = useLocation()
const path = pathname.match(/\w+/i)
const categoryName = path && path[0]




  return (
    <div className={styles.root}>
    {id && categoryName && diagolData && !isLoading && <Comments target={{_id: id, category: categoryName}} removeCommentTarget={removeDialogComment} addComment={addDialogComment} arrComments={diagolData.comments}/>}
    </div>
  );
};

export const DialogSinglPage =  React.memo(FDialogSinglPage);