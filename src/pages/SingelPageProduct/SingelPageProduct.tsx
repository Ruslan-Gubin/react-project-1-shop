import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductSinglPage } from '../../App/components';
import { ButtonGoBack } from '../../App/components/Ui';
import { IProduct } from '../../models/products';
import { useGetProductsQuery } from '../../store/rtkQuery';
import { initSelect } from '../../utils';
import styles from './SingelPageProduct.module.scss';

const SingelPageProduct = () => {
  const {isLoading, isError, data = []} = useGetProductsQuery(5) 
  const {id} = useParams()
 

  return (
    <div className={styles.root}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>isError...</div>}
      <div className={styles.menuLinks}>
        <ButtonGoBack />
      </div>
      {!isLoading && initSelect(data).filter((obj) => obj._id == id)
      .map((product:IProduct) => (
        <ProductSinglPage
        key={product._id}
        product={product}
        />
      ))} 
      <p>Рекламный блок</p>    
    </div>
  );
};

export {SingelPageProduct};