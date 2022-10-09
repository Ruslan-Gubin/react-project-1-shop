
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';


const NotFoundBlock = React.memo(() => {
  return (
    <div className={styles.root}>
      <h2>Страница не найдена</h2>
      <p className={styles.root__text}>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    <Link to='/'>
    <button className={styles.button}>Go to Home</button>
    </Link>
    </div>
  );
});

export  {NotFoundBlock};
