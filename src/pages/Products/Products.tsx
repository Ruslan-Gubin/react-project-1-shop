import { FC } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../App/components/CardProduct";
import ImagesSlider from "../../App/components/ImagesSlider";
import { imagesSwiper } from "../../data/imagesSwiper";
import { categoriItems } from "../../data/productsCategoriLink";

interface ProductsType {
  item?: Object;
}

const Products: FC<ProductsType> = () => {
  return (
    <div className="products-wrapper">
      <div className="products-container container">
        <ImagesSlider imagesSwiper={imagesSwiper} />
        <div className="products-categori">
          <div className="products-categori__items">
            {categoriItems.map((item, index) => (
              <Link to={`/${item.link}`} key={index}>
                <CardProduct item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <h1>Product</h1>
        <ul>
            <li><Link  to='pens'>Our Pen</Link></li>
            <li><Link  to='notebooks'>Our Notebooks</Link></li>           
        </ul>     
        <Outlet/> */}
    </div>
  );
};

export default Products;
