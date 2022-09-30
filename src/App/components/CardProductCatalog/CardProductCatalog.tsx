import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery, useRemoveProductMutation } from "../../../store/product/productsApi";
import * as prodSlice from "../../../store/product/stationerySlice";
import { getImgForSlider } from "../../../utils";
import { formatterRub } from "../../../utils/intl-Number-Format";
import ImagesSlider from "../ImagesSlider";
import ButtonMain from "../Ui/ButtonMain";

const CardProductCatalog = ({ _id, product }) => {
  const order = useSelector((state) => state.order.order);
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);
  const dispatch = useDispatch();
  const {  data = [] } = useGetProductsQuery(0);

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

  const sumPersent = (a, b) => Math.ceil(((a - b) / b) * 100);

  return (
    <div className="card-product__wrapper">
      <div className="card-product__container">
        <div className="card-product__header">
          <img
            className="card-product__header-img"
            alt="img"
            src={product.img || product.img2}
          />
        </div>
        <div className="card-product__body">
          <div className="card-product__body-prices">
            {product.oldPrice && (
              <div className="card-product__body-prices-precent">
                Скидка:{sumPersent(product.price, product.oldPrice)}%
              </div>
            )}
            <div className="card-product__body-prices-price">
              {formatterRub.format(product.price)}
            </div>

            <div className="card-product__body-prices-oldprice">
              {formatterRub.format(product.oldPrice)}
            </div>
          </div>
          <div className="card-product__body-name">{product.name}</div>
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
