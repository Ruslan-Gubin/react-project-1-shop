import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  orderAction, selectOrder } from "store/slice";
import { formatterRub } from "utils";
import { ImagesSlider } from "components";
import { ButtonMain } from "ui";
import { IProduct } from "models/products";

import styles from "./ProductSinglPage.module.scss";

interface IProductSinglPage {
  data: IProduct
}

const ProductSinglPage: React.FC<IProductSinglPage> = ({data}) => {
  const { order } = useSelector(selectOrder);
  const dispatch = useDispatch();
  const history = window.history

  const handlerGoBack = () => {
    history.back()
  }

  const findIdInOrder = order.find((item) => item._id === data._id);
  const filterImageForSwiper = data.images.map(item => item.url)

  return (
    <div className={styles.root}>
      {data && (
        <>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.container}>
            <div className={styles.swiper}>
              <ImagesSlider footer={true} imagesSwiper={filterImageForSwiper} />
            </div>
            <div className={styles.details}>
              <div className={styles.priceBlock}>
                <div className={styles.priceGroup}>
                  <div className={styles.price}>
                    {formatterRub.format(Number(data.price))}
                  </div>
                  <div className={styles.oldPrice}>
                    {formatterRub.format(Number(data.oldPrice))}
                  </div>
                  <div className={styles.discount}>{data.discount} %</div>
                </div>
                <div className={styles.button}>

        {data.quantity ?
       
<>
                  {findIdInOrder ? (
                    <Link to={"/cart"}>
                      <ButtonMain bgColor="green">Перейти в корзину</ButtonMain>
                    </Link>
                  ) : (
                    <ButtonMain
                      onClick={() => dispatch(orderAction.addToOrders(data))}
                      bgColor="info"
                    >
                      Добавить в корзину
                    </ButtonMain>
                  )}
</>
:
<ButtonMain onClick={() => handlerGoBack()} bgColor="secondary">Нет на складе</ButtonMain>

 }
                </div>
              </div>
              <div className={styles.description}>{data.description}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { ProductSinglPage };
