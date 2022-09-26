import {  useEffect, useRef, useState } from "react";
import {
  useRemoveProductMutation,
} from "../../../store/product/productsApi";
import ButtonMain from "../Ui/ButtonMain";

const CardProductCatalog = ({
  _id,
  name,
  price,
  oldPrice,
  img,
  img2,
  addToOrder,
  removeToOrder,
  order,
  toggles,
}) => {
 
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);
  
  const ref = useRef(_id)
  const handlerClickBue = () => {
      return  addToOrder(_id),setButtonBye(true)
    };
    
    const handlerRemoveLocal = () => {
        return removeToOrder(_id),setButtonBye(false)
  };

  useEffect(() => {
    for (let i = 0; i < order.length; i++) {
        const item = order[i]
        if (ref.current === item._id) {
            setButtonBye(true)
        } 
    }
     console.log('add prosuct')   
  },[buttonBye])

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
            <div className="card-product__body-prices-price">{price} Руб</div>

            <div className="card-product__body-prices-oldprice">{oldPrice}</div>
          </div>
          <div className="card-product__body-name">{name}</div>
        </div>
        <div className="card-product__footer">
          <div className="card-product__footer-buttons">
            {buttonBye ? (
              <ButtonMain
              ref={ref}
                onClick={() => handlerRemoveLocal()}
                bgColor="secondary"
              >
                В Корзине
              </ButtonMain>
            ) : (
              <ButtonMain 
              
              onClick={() => handlerClickBue()}>
                В Корзину
              </ButtonMain>
            )}
            <ButtonMain onClick={() => removeProduct(product)} bgColor="red">
              Удалить
            </ButtonMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductCatalog;
