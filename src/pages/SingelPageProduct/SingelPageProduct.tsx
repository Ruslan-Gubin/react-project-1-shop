import React from "react";
import { Link, useParams } from "react-router-dom";
import { Comments, ProductSinglPage } from "components";
import { ButtonGoBack } from "ui";
import { icons, productsCategoriLink } from "data";
import { IproductsCategoriLink } from "data/productsCategoriLink";
import { productsApi } from "store/rtkQuery";
import styles from "./SingelPageProduct.module.scss";

const SingelPageProduct: React.FC = () => {
  const { id } = useParams<string>();
  const { isLoading, isError, data } = productsApi.useGetOneProductQuery( id ? id : 'undefined' );
  let map: { name?: string } = {};
  
  productsCategoriLink.map((item: IproductsCategoriLink) => {
      if (item.department === data?.department) { 
        map.name = item.catigoriName 
      } 
  });
  
  return (
    <div className={styles.root}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>isError...</div>}
      <div className={styles.menuLinks}>
        <ButtonGoBack className={styles.goBack} text={" "}>
          <img src={icons.arrowLeft} alt="arrow left" />
        </ButtonGoBack>
        <Link to={"/products"}>
          <span>Каталог / </span>
        </Link>
        <Link to={`/products/${data?.department}`}>
          <span>{map.name}</span>
        </Link>
      </div>
      {data && !isLoading &&
      <ProductSinglPage data={data}/>
      }
      {/* <p>Рекламный блок</p> */}
      {/* <Comments /> */}
    </div>
  );
};

export { SingelPageProduct };
