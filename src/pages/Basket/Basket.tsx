import React from 'react';
import { BasketInfo, BasketGoods } from '../../App/components';
import { ButtonGoBack } from '../../App/components/Ui';
import styles from './Basket.module.scss';



const Basket = () => {

  return (  
    <div className={styles.root}>
      <div className={styles.button}>
        <ButtonGoBack text='Назад'/>
      </div>
      <div className={styles.basketInfo}>
      <BasketGoods />
      <BasketInfo />
      </div>
    </div>   
  );
};

export {Basket};