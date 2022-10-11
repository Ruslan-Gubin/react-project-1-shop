import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../../models/products';
import { addToOrders } from '../../../store/slice';
import { formatterRub } from '../../../utils';
import { ButtonMain } from '../Ui';
import styles from './ProductSinglPage.module.scss';

interface IProductSinglPageProps {
  product: IProduct
}

const ProductSinglPage:React.FC<IProductSinglPageProps> = ({product}) => {
  const order = useSelector((state) => state.order.order);
  const dispatch = useDispatch()

  const handlerClickBuy = () => {
    dispatch(addToOrders({product}))
  }

  return (
    <div className={styles.root}>
        <div className={styles.title}>{product.title}</div>
      <div className={styles.container}>
        <div className={styles.image}><img src={product.img} alt="imgProduct" /></div>

        <div className={styles.details}>

        <div className={styles.priceBlock}>
          <div className={styles.priceGroup}>
        <div className={styles.price}>{formatterRub.format(product.price)}</div>  
        <div className={styles.oldPrice}>{formatterRub.format(product.oldPrice)}</div>
          </div>
          <div className={styles.button}>
        <ButtonMain onClick={() => handlerClickBuy()} bgColor='info'>Добавить в корзину</ButtonMain>          
          </div>
        </div>

        <div className={styles.description}>{product.description}</div>
        </div>



      </div>
    </div>
  );
};

export {ProductSinglPage};