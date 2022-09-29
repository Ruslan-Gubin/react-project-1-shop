import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRemoveProductMutation } from "../../../store/product/productsApi";
import {
  addCountProduct,
  addToOrders,
  removeCountProduct,
  removeToOrder,
} from "../../../store/product/stationerySlice";
import { formatterRub } from "../../../utils/intl-Number-Format";
import ButtonMain from "../Ui/ButtonMain";

const CardProductCatalog = ({
  _id,
  name,
  price,
  oldPrice,
  img,
  img2,
  product,
}) => {
  const order = useSelector((state) => state.order.order);
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);

  const dispatch = useDispatch();

  const addInOrder = useCallback(() => {
    dispatch(addToOrders({ product, order }));
  }, [buttonBye]);

  const removeInOrder = useCallback(() => {
    dispatch(removeToOrder({ _id }));
    setButtonBye(!buttonBye);
  }, [buttonBye]);

  const addCount = () => dispatch(addCountProduct({ product, _id, order }));

  const removeCount = () =>
    dispatch(removeCountProduct({ product, _id, order }));

  useEffect(() => {
    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      if (item._id === _id) {
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

  const sumPersent = (a, b) => Math.ceil(((a - b) / b) * 100);

  return (
    <div className="card-product__wrapper">
      <div className="card-product__container">
        <div className="card-product__header">
          <img
            className="card-product__header-img"
            alt="img"
            src={img || img2}
          />
        </div>
        <div className="card-product__body">
          <div className="card-product__body-prices">
            {oldPrice && (
              <div className="card-product__body-prices-precent">
                Скидка:{sumPersent(price, oldPrice)}%
              </div>
            )}
            <div className="card-product__body-prices-price">
              {formatterRub.format(price)}
            </div>

            <div className="card-product__body-prices-oldprice">
              {formatterRub.format(oldPrice)}
            </div>
          </div>
          <div className="card-product__body-name">{name}</div>
        </div>
        <div className="card-product__footer">
          <div className="card-product__footer-buttons">
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

export default CardProductCatalog;
