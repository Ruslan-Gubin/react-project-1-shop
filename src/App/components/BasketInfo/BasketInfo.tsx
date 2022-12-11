import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrder } from 'store/slice';
import { formatterRub, totalSum, totalSumOldPrice } from 'utils';
import { ButtonMain } from 'ui';
import { icons } from 'data';
import styles from './BasketInfo.module.scss';
import { useNavigate } from 'react-router-dom';

const BasketInfo = React.memo(() => {
  const {order} = useSelector(selectOrder);
  const navigate = useNavigate()

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
        <ButtonMain onClick={()=> navigate('/checkout')} width={200} bgColor='info'>
          <p>Заказать</p>
        </ButtonMain>
      </div>
      <div className={styles.rools}>
        <img src={icons.checkIcon} alt="" />
        <p>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</p>
      </div>
    </div>
  );
});

export {BasketInfo};