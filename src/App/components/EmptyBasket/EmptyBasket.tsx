import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonMain } from '../Ui';
import styles from './EmptyBasket.module.scss';

const EmptyBasket = React.memo(() => {
  return (
    <div className={styles.root}>
    <h2 className={styles.title}>В корзине пока пусто</h2>
      <p className={styles.text}>Загляните на главную, чтобы выбрать товары</p>
    <div className={styles.button}>
      <Link to={'/products'}>
      <ButtonMain bgColor='info'>Перейти к категориям</ButtonMain>
      </Link>
    </div>
    </div>
  );
});

export {EmptyBasket};