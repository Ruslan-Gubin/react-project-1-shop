import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { imagesSwiper } from '../../../data/imagesSwiper';
import { useRemoveProductMutation } from '../../../store/product/productsApi';
import { toggleProductBuy } from '../../../store/product/stationerySlice';
import ImagesSlider from '../ImagesSlider';
import ButtonMain from '../Ui/ButtonMain';

const CardProductCatalog = ({_id,name,price,oldPrice,img,img2}) => {
    const dispatch = useDispatch()
    const [removeProduct, {}] = useRemoveProductMutation();
const [buttonBye,setButtonBye] = useState(false)

const handlerClickBue = useCallback(() => {
    setButtonBye(!buttonBye)
    localStorage.setItem('ProductBuy', _id)
    
  },[buttonBye,_id])


  
const sumPersent = (a,b) => Math.ceil(((a-b)/b)*100)

    return (
        <div className='card-product__wrapper'>
            <div className="card-product__container">
            <div className="card-product__header">
        <img className="card-product__header-img" alt="img" src={img || img2}    />
        
            </div>
            <div className="card-product__body">
                <div className="card-product__body-prices">
                {oldPrice && <div className="card-product__body-prices-precent">Скидка:{sumPersent(price,oldPrice)}%</div>}
                <div className="card-product__body-prices-price">{price} Руб</div>
                
                
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
            <ButtonMain onClick={() => removeProduct(product)} bgColor='red'>Удалить</ButtonMain>
            </div>
            </div>

            </div>
        </div>
    );
};

export default CardProductCatalog;