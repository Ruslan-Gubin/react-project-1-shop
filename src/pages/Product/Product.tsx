import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsApi } from "store/rtkQuery";
import { useAppDispatch } from "store/store";
import * as slice from "store/slice";
import * as component from "components";
import * as ui from "ui";
import { icons, productSortingArray } from "data";
import * as utils from "utils";
import styles from "./Product.module.scss";

const Product = React.memo(() => {
  const { order } = useSelector(slice.selectOrder);  
  const sliceState = useSelector(slice.selectFilters);
  const {data: products, isLoading, isError,} = productsApi.useGetProductsQuery(sliceState); 
  const { data: category = [], isLoading: isCategory } = productsApi.useGetCategoryQuery( sliceState ); 
  const dispatch = useAppDispatch();


  return (
    <div className={styles.catalog}>
      {isLoading && <div>Loading...</div>}
      {isError && <p>Error</p>}
      <div className={styles.search}>
        <ui.InputMain
          placeholder="Поиск товара"
          type="search"
          value={sliceState.textSearch}
          onChange={(value) =>
            dispatch(slice.filterAction.setTextSearch({ value }))
          }
        />
        <Link to={"/products"}>
          <ui.ButtonMain>Вернуться к каталогу</ui.ButtonMain>
        </Link>
        {category && !isCategory && (
          <component.FormAddProduct categorys={category.slice(1)} />
        )}
        <div className={styles.cart}>
          <>
            <ui.CustomLink to="/cart">
              <ui.ButtonMain bgColor="green">
                <img
                  className={styles.cartPng}
                  src={icons.cartPng}
                  alt="cartPng"
                />
                {order.length > 0 && <span>{order.length}</span>}
                <div>{utils.formatterRub.format(utils.totalSum(order))}</div>  
              </ui.ButtonMain>
            </ui.CustomLink>
          </>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles["container-info"]}>
            {category && !isCategory && (
              <component.Categories
                data={category}
                menuValue={sliceState.menuValue.value}
                handlerClick={(item) => dispatch(slice.filterAction.setCategoryValue(item))}
              />
            )}
            <component.CustomSelect
              options={productSortingArray}
              onChange={(value) =>dispatch(slice.filterAction.setSelectId({ value }))}
              defaultValue={sliceState.filterSelect}
            />
          </div>
        </div>
        <div  className={styles.items}>
          {!isLoading && 
            products &&
            products.data.map((product) => ( 
              <component.CardProductCatalog
                key={product._id}
                product={product}
              />
              ))}
        </div>
      </div>
      {products && !isLoading && products.length > sliceState.perPage && (
        <ui.CustomPagination
          totalCountries={products.length}
          counterPerPage={sliceState.perPage}
          currentPage={sliceState.page}
          clickNumber={(pageNumber: number) =>
            dispatch(slice.filterAction.setPaginateProduct({ pageNumber }))
          }
          prevPage={() => dispatch(slice.filterAction.setPrevPageProduct())}
          nextPage={(page: number) =>
            dispatch(slice.filterAction.setNextPageProduct(page))
          }
        />
      )}
    </div>
  );
});

export { Product };
