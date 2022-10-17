import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../../store/rtkQuery";
import { addToOrders, selectOrder } from "../../../store/slice";
import { formatterRub } from "../../../utils";
import { ImagesSlider } from "../ImagesSlider";
import { ButtonMain } from "../Ui";
import styles from "./ProductSinglPage.module.scss";

const ProductSinglPage: React.FC = () => {
  const { id } = useParams<string>();
  const { isLoading, isError, data } = useGetOneProductQuery(
    id ? id : "undefined"
  );
  const { order } = useSelector(selectOrder);
  const dispatch = useDispatch();

  const findIdInOrder = order.find((item) => item._id === id);

  return (
    <div className={styles.root}>
      {data && (
        <>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error...</div>}
          <div className={styles.title}>{data.title}</div>
          <div className={styles.container}>
            <div className={styles.swiper}>
              <ImagesSlider footer={true} imagesSwiper={data.images} />
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
                  {findIdInOrder ? (
                    <Link to={"/cart"}>
                      <ButtonMain bgColor="green">Перейти в корзину</ButtonMain>
                    </Link>
                  ) : (
                    <ButtonMain
                      onClick={() => dispatch(addToOrders(data))}
                      bgColor="info"
                    >
                      Добавить в корзину
                    </ButtonMain>
                  )}
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
