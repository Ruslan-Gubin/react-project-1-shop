import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productsApi } from "store/rtkQuery";
import {  addProductAction, filterAction } from "store/slice";
import { CardProducts, ImagesSlider } from "components";
import { productsCategoriLink } from "data";
import { getImgForSlider } from "utils";
import styles from "./Products.module.scss";

const Products: React.FC = React.memo(() => {
  // const { isLoading, data = [] } = productsApi.useGetProductsQuery(null);
  const dispatch = useDispatch();
  
  const handlerLinkClick = (value: string) => {
    dispatch(filterAction.setDepartment({value}));
    dispatch(addProductAction.setDepartmentValue({value}))
  };


  return (
    <div className={styles.products}>
      <div className={styles.swiper}>
        {/* {!isLoading && <ImagesSlider imagesSwiper={getImgForSlider(data)} />} */}
      </div>
      <div className={styles.category}>
        <div className={styles.items}>
          {productsCategoriLink.map((item) => (
            <Link
              onClick={() => handlerLinkClick(item.department)}
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
