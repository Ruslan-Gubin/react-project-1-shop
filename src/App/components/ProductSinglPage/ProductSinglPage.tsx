import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../../models/products";
import { useGetOneProductQuery } from "../../../store/rtkQuery";
import { addToOrders, selectOrder } from "../../../store/slice";
import { formatterRub } from "../../../utils";
import { ImagesSlider } from "../ImagesSlider";
import { ButtonMain } from "../Ui";
import styles from "./ProductSinglPage.module.scss";


const ProductSinglPage: React.FC = () => {
  const  {id}  = useParams();
  const {isLoading, isError,data = []} = useGetOneProductQuery({id});
  const {order} = useSelector(selectOrder);
  const dispatch = useDispatch();

  const findIdInOrder:IProduct[] = React.useCallback(order.find((item:IProduct) => item._id === id),[order])
 
  return (
    <div className={styles.root}>
    {isError && <div>Error...</div>}
    {isLoading && <div>Loading...</div>}
      <div className={styles.title}>{data.title}</div>     
      <div className={styles.container}>
        <div className={styles.swiper}>
    {!isLoading &&
          <ImagesSlider
          footer={true}
          imagesSwiper={data.images}
          />
        }
        </div>
        <div className={styles.details}>
          <div className={styles.priceBlock}>
            <div className={styles.priceGroup}>
              <div className={styles.price}>
                {formatterRub.format(data.price)}
              </div>
              <div className={styles.oldPrice}>
                {formatterRub.format(data.oldPrice)}
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
                  onClick={() => dispatch(addToOrders( data ))}
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
    </div>
  );
};

export { ProductSinglPage };
