import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Comments, ProductSinglPage } from "components";
import { ButtonGoBack, ButtonMain } from "ui";
import { icons, productsCategoriLink } from "data";
import { IproductsCategoriLink } from "data/productsCategoriLink";
import { productsApi } from "store/rtkQuery";
import styles from "./SingelPageProduct.module.scss";
import { useToggle } from "hooks";

const SingelPageProduct: React.FC = () => {
  const { id } = useParams<string>();
  const { isLoading, isError, data } = productsApi.useGetOneProductQuery(
    id ? id : "undefined"
  );
  const [createProductComment, {}] = productsApi.useCreatedProductCommentMutation();
  const [removeProductComment, {}] = productsApi.useRemoveProductCommentMutation();
  const [value, toggle] = useToggle(false, true);
  let map: { name?: string } = {};
  const {pathname} = useLocation()

  productsCategoriLink.map((item: IproductsCategoriLink) => {
    if (item.department === data?.department) {
      map.name = item.catigoriName;
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
      {data && !isLoading && <ProductSinglPage data={data} />}
      {data?.comments.length ? (
        <ButtonMain onClick={() => toggle()} bgColor="visa">
          Показать коментарии
        </ButtonMain>
      ) : (
        <ButtonMain onClick={() => toggle()} bgColor="visa">
          Скрыть коментарии
        </ButtonMain>
      )}
      {id && data && value && pathname && (
        <Comments
          target={{ _id: id, category: pathname }}
          addComment={createProductComment}
          arrComments={data?.comments}
          removeCommentTarget={removeProductComment}
        />
      )}
    </div>
  );
};

export { SingelPageProduct };
