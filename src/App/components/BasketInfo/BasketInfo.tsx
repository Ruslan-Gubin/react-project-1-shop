import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BasketInfo.module.scss';

const BasketInfo = () => {
  const order = useSelector((state) => state.order.order);

  return (
    <div className={styles.root}>
      I am BasketInfo
    </div>
  );
};

export {BasketInfo};