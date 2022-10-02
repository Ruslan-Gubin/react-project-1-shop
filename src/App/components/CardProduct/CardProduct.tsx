import React, { FC } from 'react';

interface CardProductType {
    img: string
    catigoriName: string
}

const CardProducts: FC<CardProductType> = ({item}) => {
    return (
        <div className="products-item" >
            <img className='products-item__img' src={item.img} alt={item.catigoriName} />
            <span className='products-item__text'>{item.catigoriName}</span>
            </div>
    );
};

export  {CardProducts};