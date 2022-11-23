import React from 'react';
import {isRouteErrorResponse, useRouteError} from 'react-router-dom'
import styles from './ErrorPage.module.scss';

const FErrorPage = () => {
  const error = useRouteError()

if (isRouteErrorResponse(error)) {
  return (
    <div className={styles.root}>
      <h1>{error.status}</h1>
      <h2>{error.data.message || 'Someting goes wrong'}</h2>
      <h3>{error.data.reason}</h3>
    </div>
  );
}

// return <div>'Someting goes wrong'</div>
throw error  // ошибку бросаем дальше
};

export const ErrorPage =  React.memo(FErrorPage);