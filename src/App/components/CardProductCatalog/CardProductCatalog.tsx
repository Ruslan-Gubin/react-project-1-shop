import React, { useCallback, useState } from 'react';
import ButtonMain from '../Ui/ButtonMain';

const CardProductCatalog = ({product,remove}) => {
const [buttonBye,setButtonBye] = useState(false)

const handlerClickBue = useCallback(() => {
    setButtonBye(!buttonBye)
},[buttonBye])

const sumPersent = (a,b) => Math.ceil(((a-b)/b)*100)
     
const {name,price,oldPrice,img} = product

    return (
        <div className='card-product__wrapper'>
            <div className="card-product__container">
            <div className="card-product__header">
        <img className="card-product__header-img" src={img} alt="img" />
            </div>
            <div className="card-product__body">
                <div className="card-product__body-prices">
                {oldPrice && <div className="card-product__body-prices-precent">Скидка:{sumPersent(price,oldPrice)}%</div>}
                <div className="card-product__body-prices-price">{price}Руб</div>
                
                
                <div className="card-product__body-prices-oldprice">{oldPrice}</div>
                </div>
                <div className="card-product__body-name">{name}</div>
            </div>
            <div className="card-product__footer">
            <div className="card-product__footer-buttons">
                {buttonBye ?
                <ButtonMain onClick={handlerClickBue} bgColor='secondary'>В Корзине</ButtonMain>
                :
                <ButtonMain onClick={handlerClickBue} >В Корзину</ButtonMain>
            }
            <ButtonMain onClick={() => remove(product)} bgColor='red'>Удалить</ButtonMain>
            </div>
            </div>

            </div>
        </div>
    );
};

export default CardProductCatalog;