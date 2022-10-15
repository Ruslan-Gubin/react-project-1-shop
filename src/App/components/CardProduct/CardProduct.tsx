import React from 'react';
import { IproductsCategoriLink } from '../../../data/productsCategoriLink';

import styles from './CardProduct.module.scss';

interface ICardProducts {
    item: IproductsCategoriLink
}

const CardProducts:React.FC<ICardProducts> = React.memo(({item}) => {
 
    return (
        <div className={styles.item} >
            <img className={styles.img} src={item.img} alt={item.catigoriName} />
            <span className={styles.text}>{item.catigoriName}</span>
            </div>
    );
});

export  {CardProducts};