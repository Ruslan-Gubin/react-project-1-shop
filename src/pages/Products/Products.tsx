import React from "react";
import { useDispatch } from "react-redux";
import { CardProducts, ImagesSlider } from "../../App/components";
import { productsCategoriLink } from "../../data";
import { useGetProductsQuery } from "../../store/rtkQuery/productApi/productsApi";
import { getImgForSlider } from "../../utils";
import styles from "./Products.module.scss";
import { CustomLink } from "../../App/components/Ui";
import { resetPageProduct, resetMenuId } from "../../store/slice";

interface ProductsType {
  item?: Object;
}

const Products: React.FC<ProductsType> = React.memo(() => {
  const { data = [] } = useGetProductsQuery(0);
  const dispatch = useDispatch();

  const handlerLinkClick = () => {
    dispatch(resetMenuId());
    dispatch(resetPageProduct());
  };

  return (
    <div className={styles.products}>
      <div className="container">
        <ImagesSlider imagesSwiper={getImgForSlider(data)} />
        <div className={styles.category}>
          <div className={styles.items}>
            {productsCategoriLink.map((item, index) => (
              <CustomLink
                onClick={() => handlerLinkClick()}
                to={`/products/${item.department}`}
                key={item.department}
              >
                <CardProducts key={item.catigoriName} item={item} />
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export { Products };
