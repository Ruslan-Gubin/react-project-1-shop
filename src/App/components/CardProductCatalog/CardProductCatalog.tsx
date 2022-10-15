import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as prodSlice from "../../../store/slice";
import { useRemoveProductMutation } from "../../../store/rtkQuery";
import { Link, } from "react-router-dom";
import { formatterRub, sumDiscount } from "../../../utils";
import styles from "./CardProductCatalog.module.scss";
import { ModalRemoveItem } from "../ModalRemoveItem";
import { IProduct } from "../../../models/products";
import { ButtonMain } from "../Ui";
import { Modal } from "../Modal";


interface ICardProductCatalogProps {
  product: IProduct;
  _id: string;
}

const CardProductCatalog: React.FC<ICardProductCatalogProps> = React.memo(
  ({ _id, product }) => {
    const {order} = useSelector(prodSlice.selectOrder);
    const [removeProduct, {}] = useRemoveProductMutation();
    const [modalActive, setModalActive] = React.useState(false);
    const dispatch = useDispatch();
    
    const findIdInOrder:IProduct[] = React.useCallback(order.find((item:IProduct) => item._id === _id),[order])

    const productCounter = React.useCallback(order.map((item:IProduct) => (item._id === product._id) && item.counter),[order])
  
    return (
      <div className={styles.wrapper}>
        <div className={styles.product}>
          <Link to={`${product._id}`}>
            <div className={styles.header}>
              <img
                className={styles.img}
                alt="img"
                src={product.images[0] || product.images[1]}
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
              {findIdInOrder ? (
                <ButtonMain
                  onClick={() => dispatch(prodSlice.removeToOrder({ _id }))}
                  bgColor="secondary"
                >
                  В Корзине: {productCounter}
                </ButtonMain>
              ) : (
                <ButtonMain onClick={()=> dispatch(prodSlice.addToOrders( product ))}>В Корзину</ButtonMain>
              )}
              {findIdInOrder && (
                <>
                  <ButtonMain onClick={() => dispatch(prodSlice.addCountGoods({ _id }))} bgColor="green">
                    +
                  </ButtonMain>
                  <ButtonMain onClick={() => dispatch(prodSlice.removeCountGoods({ _id }))} bgColor="green">
                    -
                  </ButtonMain>
                </>
              )}
              {!findIdInOrder && (
                <ButtonMain
                  onClick={() => setModalActive(!modalActive)}
                  bgColor="red"
                >
                  Удалить
                </ButtonMain>
              )}
              {modalActive && (
                <Modal active={modalActive} setActive={setModalActive}>
                  <ModalRemoveItem
                    confirm={() => removeProduct(product)}
                    cancel={() => setModalActive(!modalActive)}
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { CardProductCatalog };
