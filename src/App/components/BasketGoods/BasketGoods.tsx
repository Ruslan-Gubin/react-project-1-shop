import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BasketGoods.module.scss';
import removeGoodsPng from '../../../assets/img/icons/delete-goods-897632.png';
import { addCountGoods, removeCountGoods, removeToOrder } from '../../../store/product/stationerySlice';

const BasketGoods: React.FC = () => {
  const order = useSelector((state) => state.order.order);
  const dispatch = useDispatch()

  const removeGoodsOrder = (_id: string) => dispatch(removeToOrder({_id}))

  const addCount = React.useCallback((_id:string) => dispatch(addCountGoods({_id})),[order])

  const removeCount = React.useCallback((_id:string) => dispatch(removeCountGoods({_id})),[order])
 
  return (
    <div className={styles.root}>
      <ul className={styles.ul}>
        {order && order.map(product => (
          <li key={product._id} className={styles.item}>

            <div className={styles.img}>
           <img  src={product.img} alt="product img" />
            </div>

            <div className={styles.name}>
            <p>{product.name}</p>
            </div>

            <div className={styles.buttons}>
            <button onClick={()=> removeCount(product._id)} className={styles.decrement}>-</button>
            <span className={styles.count}>{product.counter}</span>
            <button onClick={()=> addCount(product._id)} className={styles.increment}>+</button>
            </div>
           
           <div className={styles.tailPrice}>
           <span className={styles.price}>{product.price}</span>
           <span className={styles.oldPrice}>{product.oldPrice}</span>
           <img onClick={()=> removeGoodsOrder(product._id)} className={styles.delete} src={removeGoodsPng} alt="delete" />
           </div> 
          </li>
          ))}     
      </ul>
      {!order.length && <div>no product :(</div>}
     
    </div>
  );
};

export {BasketGoods};