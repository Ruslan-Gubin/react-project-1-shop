import React from "react";
import { useGetProductsQuery } from "../../store/rtkQuery";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as utils from "../../utils";
import * as component from "../../App/components";
import * as ui from "../../App/components/Ui";
import * as slice from "../../store/slice";
import { cartPng, productSortingArray } from "../../data";
import styles from "./Product.module.scss";
import { useAppDispatch } from "../../store/store";

const Product = React.memo(() => {
  const { order } = useSelector(slice.selectOrder);
  const sliceState = useSelector(slice.selectFilters);
  const { isLoading, isError, data = [] } = useGetProductsQuery(null);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!isLoading && !isError && id && data) {
      dispatch(slice.setDataDepartment({ id, data }));
    }
  }, [data]);

  React.useEffect(() => {
    dispatch(slice.setSearchTextForMenu());
    if (!isLoading) dispatch(slice.setFilterPagination());
  }, [
    sliceState.dataDepartments,
    sliceState.textSearch,
    sliceState.menuValue,
    sliceState.page,
  ]);

  const handlerClickCategory = (item: string) => {
    dispatch(slice.setCategoryValue({ item }));
  };

  return (
    <div className={styles.catalog}>
      {isLoading && <div>Loading...</div>}
      {isError && <p>Error</p>}
      <div className={styles.search}>
        <ui.InputMain
          placeholder="Поиск товара"
          type="search"
          value={sliceState.textSearch}
          onChange={(value) => dispatch(slice.setTextSearch({ value }))}
        />
        <Link to={"/products"}>
          <ui.ButtonMain>Вернуться к каталогу</ui.ButtonMain>
        </Link>
        <component.FormAddProduct />
        <div className={styles.cart}>
          <>
            <ui.CustomLink to="/cart">
              <ui.ButtonMain bgColor="green">
                <img className={styles.cartPng} src={cartPng} alt="cartPng" />
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
            <component.Categories
              data={utils.categoryFilterName(sliceState.dataDepartments, true)}
              menuValue={sliceState.menuValue}
              handlerClick={(item) => handlerClickCategory(item)}
            />
            <component.CustomSelect
              options={productSortingArray}
              onChange={(value) => dispatch(slice.setSelectId({ value }))}
              defaultValue={sliceState.filterSelect}
            />
          </div>
        </div>
        <div className={styles.items}>
          {!isLoading &&
            sliceState.filterPagination?.map((product) => (
              <component.CardProductCatalog
                key={product._id}
                product={product}
              />
            ))}
        </div>
      </div>
      <ui.CustomPagination
        totalCountries={sliceState.textMenuFilter.length}
        counterPerPage={sliceState.perPage}
        currentPage={sliceState.page}
        clickNumber={(pageNumber: number) =>
          dispatch(slice.setPaginateProduct({ pageNumber }))
        }
        prevPage={() => dispatch(slice.setPrevPageProduct())}
        nextPage={(page: number) => dispatch(slice.setNextPageProduct(page))}
      />
    </div>
  );
});

export { Product };
