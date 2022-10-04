import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../../models/products";
import { useRemoveProductMutation } from "../../../store/product/productsApi";
import * as prodSlice from "../../../store/product/stationerySlice";
import { formatterRub, sumDiscount } from "../../../utils";
import { ButtonMain } from "../Ui";

import styles from './CardProductCatalog.module.scss';

const CardProductCatalog: React.FC<IProduct> = ({ _id, product }) => {
  const order = useSelector((state) => state.order.order);
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);
  const dispatch = useDispatch();

  const addInOrder = useCallback(() => {
    dispatch(prodSlice.addToOrders({ product, order }));
    setButtonBye(true);
  }, [buttonBye]);

  const removeInOrder = useCallback(() => {
    dispatch(prodSlice.removeToOrder({ _id }));
    setButtonBye(false);
  }, [buttonBye]);

  const addCount = () =>
    dispatch(prodSlice.addCountProduct({ product, _id, order }));

  const removeCount = () =>
    dispatch(prodSlice.removeCountProduct({ product, _id, order }));

  useEffect(() => {
    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      if (item._id === product._id) {
        setButtonBye(true);
      }
    }
  }, [order]);

  const resCounter = () => {
    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      if (item._id === product._id) {
        product.counter = item.counter;
      }
    }
    return product.counter;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.header}>
          <img
            className={styles.img}
            alt="img"
            src={product.img || product.img2}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.prices}>
            {product.oldPrice && (
              <div className={styles.precent}>
                Скидка:{sumDiscount(product.price, product.oldPrice)}%
              </div>
            )}
            <div className={styles.price}>
              {formatterRub.format(product.price)}
            </div>

            <div className={styles.oldprice}>
              {formatterRub.format(product.oldPrice)}
            </div>
          </div>
          <div className={styles.name}>{product.name}</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.buttons}>
            {buttonBye ? (
              <ButtonMain onClick={removeInOrder} bgColor="secondary">
                В Корзине: {resCounter()}
              </ButtonMain>
            ) : (
              <ButtonMain onClick={addInOrder}>В Корзину</ButtonMain>
            )}
            {buttonBye && (
              <>
                <ButtonMain onClick={addCount} bgColor="green">
                  +
                </ButtonMain>
                <ButtonMain onClick={removeCount} bgColor="green">
                  -
                </ButtonMain>
              </>
            )}
            {!buttonBye && (
              <ButtonMain onClick={() => removeProduct(product)} bgColor="red">
                Удалить
              </ButtonMain>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardProductCatalog };
