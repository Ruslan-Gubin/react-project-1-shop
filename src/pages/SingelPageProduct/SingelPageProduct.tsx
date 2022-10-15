import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductSinglPage } from "../../App/components";
import { ButtonGoBack } from "../../App/components/Ui";
import { arrowLeft, productsCategoriLink } from "../../data";
import { IproductsCategoriLink } from "../../data/productsCategoriLink";
import { IProduct } from "../../models/products";
import { useGetOneProductQuery } from "../../store/rtkQuery";
import styles from "./SingelPageProduct.module.scss";

const SingelPageProduct: React.FC = () => {
  const { id } = useParams<string>();
  const { isLoading, isError, data = [] } = useGetOneProductQuery({ id }as IProduct);
  let map: { name?: string } = {};

  productsCategoriLink.map((item: IproductsCategoriLink) => {
      if (item.department === data.department) { 
        map.name = item.catigoriName 
      } 
  });

  return (
    <div className={styles.root}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>isError...</div>}
      <div className={styles.menuLinks}>
        <ButtonGoBack className={styles.goBack} text={" "}>
          <img src={arrowLeft} alt="arrow left" />
        </ButtonGoBack>
        <Link to={"/products"}>
          <span>Каталог / </span>
        </Link>
        <Link to={`/products/${data.department}`}>
          <span>{map.name}</span>
        </Link>
      </div>
      <ProductSinglPage />
      {/* <p>Рекламный блок</p> */}
    </div>
  );
};

export { SingelPageProduct };
