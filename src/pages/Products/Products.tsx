import { FC } from "react";
import { Link } from "react-router-dom";
import { CardProducts, ImagesSlider } from "../../App/components";
import { productsCategoriLink } from "../../data";
import { useGetProductsQuery } from "../../store/product/productsApi";
import { getImgForSlider } from "../../utils";

interface ProductsType {
  item?: Object;
}

const Products: FC<ProductsType> = () => {
  const {  data = [] } = useGetProductsQuery(0);
  return (
    <div className="products-wrapper">
      <div className="products-container container">
        <ImagesSlider imagesSwiper={getImgForSlider(data)} />
        <div className="products-categori">
          <div className="products-categori__items">
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
