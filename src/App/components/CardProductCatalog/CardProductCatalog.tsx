import {  useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRemoveProductMutation } from "../../../store/product/productsApi";
import { addToOrders, removeToOrder } from "../../../store/product/stationerySlice";
import { formatterRub } from "../../../utils/intl-Number-Format";
import ButtonMain from "../Ui/ButtonMain";

const CardProductCatalog = ({
  _id,
  name,
  price,
  oldPrice,
  img,
  img2,
  // addToOrder,
  // removeToOrder,
  counter,
  // order,
  product,
  addProductLocal,
  removeProductLocal,
  countRender,
}) => {
  const orders = useSelector(state => state.order.order)
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);

  const dispatch = useDispatch()
  
  const addInOrder = () => dispatch(addToOrders({product}))
 
  const removeInOrder = () => {
    dispatch(removeToOrder({_id}))
    setButtonBye(!buttonBye);
  } 
    
  
    
  // const handlerClickBue = (id) => {
  //   return addToOrder(id), setButtonBye(true);
  // };

  // const handlerRemoveLocal = (id) => {
  //   return removeToOrder(id), setButtonBye(false);
  // };

  useEffect(() => {
    for (let i = 0; i < orders.length; i++) {
      const item = orders[i];
      if (item._id === _id) {
        setButtonBye(true);
      }  
    }
  }, [orders]);

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
            <div className="card-product__body-prices-price">{formatterRub.format(price)}</div>

            <div className="card-product__body-prices-oldprice">{formatterRub.format(oldPrice)}</div>
          </div>
          <div className="card-product__body-name">{name}</div>
        </div>
        <div className="card-product__footer">
          <div className="card-product__footer-buttons">
          {buttonBye  ? (
              <ButtonMain
              // onClick={() => handlerRemoveLocal(_id)}
              onClick={removeInOrder}
              bgColor="secondary"
              >
                В Корзине: 
                {/* В Корзине: {countRender(_id)} */}
              </ButtonMain>
            ) : (
              <ButtonMain 
              onClick={addInOrder}>
                В Корзину
              </ButtonMain>
            )}
            {buttonBye && 
            <>
              <ButtonMain onClick={() => addProductLocal(_id)} bgColor="green">+</ButtonMain>
              <ButtonMain onClick={() => removeProductLocal(_id)} bgColor="green">-</ButtonMain>
            </>
            }
            {!buttonBye && 
            <ButtonMain onClick={() => removeProduct(product)} bgColor="red">
              Удалить
            </ButtonMain>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductCatalog;
