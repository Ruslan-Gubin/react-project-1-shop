import React, { FC } from 'react';

import styles from './CardProduct.module.scss';

interface CardProductType {
    img: string
    catigoriName: string
}

const CardProducts: FC<CardProductType> = ({item}) => {
    return (
        <div className={styles.item} >
            <img className={styles.img} src={item.img} alt={item.catigoriName} />
            <span className={styles.text}>{item.catigoriName}</span>
            </div>
    );
};

export  {CardProducts};