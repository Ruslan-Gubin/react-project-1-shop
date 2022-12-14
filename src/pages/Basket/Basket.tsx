import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketInfo, BasketGoods, EmptyBasket } from "components";
import { ButtonGoBack, ButtonMain } from "ui";
import { icons } from "data";
import { orderAction, selectOrder } from "store/slice";
import styles from "./Basket.module.scss";

const Basket = React.memo(() => {
  const { order } = useSelector(selectOrder);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      {order.length ? (
        <>
          <div className={styles.button}>
            <ButtonGoBack className={styles.goBack} text={" "}>
              <img src={icons.arrowLeft} alt="arrow left" />
            </ButtonGoBack>
            <ButtonMain width={200} onClick={() => dispatch(orderAction.clearOrder())} bgColor="black">
              Очистить корзину
            </ButtonMain>
          </div>
          <div className={styles.basket}>
            <div className={styles.goods}>
              <BasketGoods />
            </div>
            <div>
              <BasketInfo />
            </div>
          </div>
        </>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
});

export { Basket };
