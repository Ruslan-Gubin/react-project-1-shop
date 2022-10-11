import React from "react";
import { useSelector } from "react-redux";
import { BasketInfo, BasketGoods, EmptyBasket } from "../../App/components";
import { ButtonGoBack } from "../../App/components/Ui";
import styles from "./Basket.module.scss";

const Basket = React.memo(() => {
  const order = useSelector((state) => state.order.order);

  return (
    <div className={styles.root}>
      {order.length ? (
        <>
          <div className={styles.button}><ButtonGoBack text="Назад" /></div>

          <div className={styles.basket}>
            <div className={styles.goods}><BasketGoods /> </div>
            <div><BasketInfo /> </div>      
          </div>
        </>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
});

export { Basket };
