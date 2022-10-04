import React from "react";
import { Link } from "react-router-dom";
import { CardProducts, ImagesSlider } from "../../App/components";
import { productsCategoriLink } from "../../data";
import { useGetProductsQuery } from "../../store/product/productsApi";
import { getImgForSlider } from "../../utils";
import styles from './Products.module.scss' 

interface ProductsType {
  item?: Object;
}

const Products: React.FC<ProductsType> = () => {
  const {  data = [] } = useGetProductsQuery(0);
  return (
    <div className={styles.products}>
      <div className='container'>
        <ImagesSlider imagesSwiper={getImgForSlider(data)} />
        <div className={styles.category}>
          <div className={styles.items}>
            {productsCategoriLink.map((item, index) => (
              <Link to={`/product/${item.department}`}   key={item.department} >
            <CardProducts key={item.catigoriName} item={item} /> 
             </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export  {Products};
