import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountGoods, removeCountGoods, removeToOrder } from '../../../store/slice';
import { formatterRub } from '../../../utils';
import { useMatchMedia } from '../../../hooks';
import { removeGoodsPng } from '../../../data';
import styles from './BasketGoods.module.scss';

const BasketGoods: React.FC = React.memo(() => {
  const order = useSelector((state) => state.order.order);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const dispatch = useDispatch()

  const removeGoodsOrder = (_id: string) => dispatch(removeToOrder({_id}))

  const addCount = React.useCallback((_id:string) => dispatch(addCountGoods({_id})),[order])

  const removeCount = React.useCallback((_id:string) => dispatch(removeCountGoods({_id})),[order])
 
  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        { order.map(product => (
              <li key={product._id} className={styles.item}>
              <div className={styles.img}>
              <img  src={product.img} alt="product img" />
              </div>

              <div className={styles.name}>
              <p>{product.title}</p>
              {isMobile && 
              <>
              <span className={styles.mediaPrice}> Цена: {formatterRub.format(product.price)}</span>  
 <img onClick={()=> removeGoodsOrder(product._id)} className={styles.mobileRemove} src={removeGoodsPng} alt="delete" />
              </>
              }
              </div>

              <div className={styles.buttons}>
            <button onClick={()=> removeCount(product._id)} className={styles.decrement}>-</button>
            <span className={styles.count}>{product.counter}</span>
            <button onClick={()=> addCount(product._id)} className={styles.increment}>+</button>
            </div>   
            <div className={styles.tailPrice}>
            <span className={styles.price}>{formatterRub.format(product.price)}</span>
            <span className={styles.oldPrice}>{formatterRub.format(product.oldPrice)}</span>
            <img onClick={()=> removeGoodsOrder(product._id)} className={styles.delete} src={removeGoodsPng} alt="delete" />
            </div> 
            </li>     
          ))} 
      </ul>    
    </div>

  );
});

export {BasketGoods};