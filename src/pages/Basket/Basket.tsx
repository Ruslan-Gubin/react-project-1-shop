import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketInfo, BasketGoods, EmptyBasket } from "../../App/components";
import { ButtonGoBack, ButtonMain } from "../../App/components/Ui";
import { arrowLeft } from "../../data";
import { clearOrder, selectOrder } from "../../store/slice";
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
              <img src={arrowLeft} alt="arrow left" />
            </ButtonGoBack>
            <ButtonMain onClick={() => dispatch(clearOrder())} bgColor="black">
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
