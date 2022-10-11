import React from 'react';
import { useSelector } from 'react-redux';
import { checkIcon } from '../../../data';
import { formatterRub, totalSum, totalSumOldPrice } from '../../../utils';
import { ButtonMain } from '../Ui';
import styles from './BasketInfo.module.scss';

const BasketInfo = React.memo(() => {
  const order = useSelector((state) => state.order.order);

  return (
    <div className={styles.root}>
      <div className={styles.title}>
      <p>Итого:</p>
      <span>{formatterRub.format(totalSum(order))}</span>
      </div>
      <div className={styles.goods}>
    <p>Товары, {order.length}шт </p>
    <span>{formatterRub.format(totalSumOldPrice(order))}</span>
      </div>
      <div className={styles.discount}>
        <p>Скидка:</p>
        <span> - {formatterRub.format(totalSumOldPrice(order) - totalSum(order))}</span>
      </div>
      <div className={styles.button}>
        <ButtonMain bgColor='info'>
          <p>Заказать</p>
        </ButtonMain>
      </div>
      <div className={styles.rools}>
        <img src={checkIcon} alt="" />
        <p>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</p>
      </div>
    </div>
  );
});

export {BasketInfo};