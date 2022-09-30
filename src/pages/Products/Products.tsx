import { FC } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../App/components/CardProduct";
import ImagesSlider from "../../App/components/ImagesSlider";
import { categoriItems } from "../../data/productsCategoriLink";
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
            {categoriItems.map((item, index) => (
              <Link to={`/product/${item.department}`}   key={item.department} >
            <CardProduct key={item.catigoriName} item={item} /> 
             </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export  {Products};
