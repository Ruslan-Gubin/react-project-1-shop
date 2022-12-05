import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderAction, selectOrder } from "store/slice";
import { useMatchMedia } from "hooks";
import { formatterRub } from "utils";
import { icons } from "data";

import styles from "./BasketGoods.module.scss";

const BasketGoods: React.FC = React.memo(() => {
  const { order } = useSelector(selectOrder);
  const isMobile = useMatchMedia();
  const dispatch = useDispatch();

  const removeGoodsOrder = (_id: string) =>
    dispatch(orderAction.removeToOrder({ _id }));

  const addCount = React.useCallback(
    (_id: string) => dispatch(orderAction.addCountGoods({ _id })),
    []
  );

  const removeCount = React.useCallback(
    (_id: string) => dispatch(orderAction.removeCountGoods({ _id })),
    []
  );

  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        {order.map((product) => (
          <li key={product._id} className={styles.item}>
            <div className={styles.img}>
              <Link to={`/products/${product.department}/${product._id}`}>
                <img src={product.images.url} alt="product img" />
              </Link>
            </div>

            <div className={styles.title}>
              <Link to={`/products/${product.department}/${product._id}`}>
                <p>{product.title}</p>
              </Link>
              {isMobile && (
                <>
                  <span className={styles.mediaPrice}>
                    {" "}
                    Цена: {formatterRub.format(Number(product.price))}
                  </span>
                  <img
                    onClick={() => removeGoodsOrder(String(product._id))}
                    className={styles.mobileRemove}
                    src={icons.removeGoodsPng}
                    alt="delete"
                  />
                </>
              )}
            </div>

            <div className={styles.buttons}>
              <button
                onClick={() => removeCount(String(product._id))}
                className={styles.decrement}
              >
                -
              </button>
              <span className={styles.count}>{product.counter}</span>
              <button
                onClick={() => addCount(String(product._id))}
                className={styles.increment}
              >
                +
              </button>
            </div>
            <div className={styles.tailPrice}>
              <span className={styles.price}>
                {formatterRub.format(Number(product.price))}
              </span>
              <span className={styles.oldPrice}>
                {formatterRub.format(Number(product.oldPrice))}
              </span>
              <img
                onClick={() => removeGoodsOrder(String(product._id))}
                className={styles.delete}
                src={icons.removeGoodsPng}
                alt="delete"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export { BasketGoods };
