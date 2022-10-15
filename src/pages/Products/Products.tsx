import React from "react";
import { useDispatch } from "react-redux";
import { CardProducts, ImagesSlider } from "../../App/components";
import { productsCategoriLink } from "../../data";
import { useGetProductsQuery } from "../../store/rtkQuery";
import { getImgForSlider } from "../../utils";
import styles from "./Products.module.scss";
import { resetPageProduct, resetMenuId } from "../../store/slice";
import { Link } from "react-router-dom";



const Products: React.FC = React.memo(() => {
  const {isLoading, data = [] } = useGetProductsQuery(0);
  const dispatch = useDispatch();

  const handlerLinkClick = () => {
    dispatch(resetMenuId());
    dispatch(resetPageProduct());
  };
 
  return (
    <div className={styles.products}>
        <div className={styles.swiper}>
      {!isLoading && <ImagesSlider  imagesSwiper={getImgForSlider(data)} />}
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
