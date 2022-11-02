import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postApi, productsApi } from "../../store/rtkQuery";
import {  filterAction } from "../../store/slice";
import { CardProducts, ImagesSlider } from "../../App/components";
import { productsCategoriLink } from "../../data";
import { getImgForSlider } from "../../utils";
import styles from "./Products.module.scss";

const Products: React.FC = React.memo(() => {
  const { isLoading, data = [] } = productsApi.useGetProductsQuery(null);
  const dispatch = useDispatch();
  
  const handlerLinkClick = () => {
    dispatch(filterAction.resetMenuId());
  };

  return (
    <div className={styles.products}>
      <div className={styles.swiper}>
        {!isLoading && <ImagesSlider imagesSwiper={getImgForSlider(data)} />}
      </div>
      <div className={styles.category}>
        <div className={styles.items}>
          {productsCategoriLink.map((item) => (
            <Link
              onClick={() => handlerLinkClick()}
              to={`/products/${item.department}`}
              key={item.department}
            >
              <CardProducts key={item.catigoriName} item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export { Products };
