import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as slice from "../../../store/slice";
import { Link } from "react-router-dom";
import { formatterRub, sumDiscount } from "../../../utils";
import styles from "./CardProductCatalog.module.scss";
import { ModalRemoveItem } from "../ModalRemoveItem";
import { IProduct } from "../../../models/products";
import { ButtonMain } from "../Ui";
import { Modal } from "../Modal";
import { productsApi } from "../../../store/rtkQuery";

interface ICardProductCatalogProps {
  product: IProduct;
}

const CardProductCatalog: React.FC<ICardProductCatalogProps> = React.memo(
  ({ product }) => {
    const { order } = useSelector(slice.selectOrder);
    const [removeProduct, {}] = productsApi.useRemoveProductMutation();
    const [modalActive, setModalActive] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    let _id: string = "";
    if (product._id) _id = product._id;

    const findIdInOrder = order.find(
      (item: IProduct) => item._id === product._id
    );

    const productCounter = order.map(
      (item: IProduct) => item._id === product._id && item.counter
    );

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
                {formatterRub.format(Number(product.price))}
              </div>

              <div className={styles.oldprice}>
                {formatterRub.format(Number(product.oldPrice))}
              </div>
            </div>
            <div className={styles.name}>{product.title}</div>
          </div>
          <div className={styles.footer}>
            <div className={styles.buttons}>
              {findIdInOrder ? (
                <ButtonMain
                  onClick={() => dispatch(slice.orderAction.removeToOrder({ _id }))}
                  bgColor="secondary"
                >
                  <>В Корзине: {productCounter}</>
                </ButtonMain>
              ) : (
                <ButtonMain
                  onClick={() => dispatch(slice.orderAction.addToOrders(product))}
                >
                  В Корзину
                </ButtonMain>
              )}
              {findIdInOrder && (
                <>
                  <ButtonMain
                    onClick={() => dispatch(slice.orderAction.addCountGoods({ _id }))}
                    bgColor="green"
                  >
                    +
                  </ButtonMain>
                  <ButtonMain
                    onClick={() =>
                      dispatch(slice.orderAction.removeCountGoods({ _id }))
                    }
                    bgColor="green"
                  >
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
              <Modal active={modalActive} setActive={setModalActive}>
                <ModalRemoveItem
                  text="Вы действительно хотите удалить этот товар?"
                  confirm={() => removeProduct(_id)}
                  cancel={() => setModalActive(!modalActive)}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { CardProductCatalog };
