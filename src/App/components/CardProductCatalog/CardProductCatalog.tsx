import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../../../models/products";
import { useRemoveProductMutation } from "../../../store/rtkQuery";
import * as prodSlice from "../../../store/slice/orderSlice/orderSlice";
import { formatterRub, sumDiscount } from "../../../utils";
import { ButtonMain } from "../Ui";

import styles from "./CardProductCatalog.module.scss";

interface ICardProductCatalogProps {
  product: IProduct
  _id: string
}

const CardProductCatalog: React.FC<ICardProductCatalogProps> = React.memo(
  ({ _id, product }) => {
    const order = useSelector((state) => state.order.order);
    const [removeProduct, {}] = useRemoveProductMutation();
    const [buttonBye, setButtonBye] = useState(false);
    const dispatch = useDispatch();

    const addInOrder = useCallback(() => {
      dispatch(prodSlice.addToOrders({ product }));
      setButtonBye(true);
    }, [buttonBye]);

    const removeInOrder = useCallback(
      (_id: string) => {
        dispatch(prodSlice.removeToOrder({ _id }));
        setButtonBye(false);
      },
      [buttonBye]
    );

    const addCount = React.useCallback(
      () => dispatch(prodSlice.addCountGoods({ _id })),
      [order]
    );

    const removeCount = React.useCallback(
      () => dispatch(prodSlice.removeCountGoods({ _id })),
      [order]
    );

    useEffect(() => {
      for (let i = 0; i < order.length; i++) {
        const item = order[i];
        if (item._id === product._id) {
          setButtonBye(true);
        }
      }
    }, [order]);

    const resCounter = React.useMemo(() => {
      for (let i = 0; i < order.length; i++) {
        if (order[i]._id === product._id)
          return (product.counter = order[i].counter);
      }
    }, [order]);

    return (
      <div className={styles.wrapper}>
        <div className={styles.product}>
      <Link to={`${product._id}`}>
          <div className={styles.header}>
            <img
              className={styles.img}
              alt="img"
              src={product.img || product.img2}
              />
          </div>
              </Link>
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
            <div className={styles.name}>{product.title}</div>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttons}>
              {buttonBye ? (
                <ButtonMain
                  onClick={() => removeInOrder(_id)}
                  bgColor="secondary"
                >
                  В Корзине: {resCounter}
                </ButtonMain>
              ) : (
                <ButtonMain onClick={addInOrder}>В Корзину</ButtonMain>
              )}
              {buttonBye && (
                <>
                  <ButtonMain onClick={() => addCount()} bgColor="green">
                    +
                  </ButtonMain>
                  <ButtonMain onClick={removeCount} bgColor="green">
                    -
                  </ButtonMain>
                </>
              )}
              {!buttonBye && (
                <ButtonMain
                  onClick={() => removeProduct(product)}
                  bgColor="red"
                >
                  Удалить
                </ButtonMain>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { CardProductCatalog };
