import React from "react";
import { useGetProductsQuery } from "../../store/rtkQuery";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as utils from "../../utils";
import * as component from "../../App/components";
import * as ui from "../../App/components/Ui";
import * as slice from "../../store/slice";
import { cartPng, productSortingArray } from "../../data";
import { IProduct } from "../../models/products";
import styles from "./Product.module.scss";

const Product = React.memo(() => {
  const {order} = useSelector(slice.selectOrder);
  const sliceState = useSelector(slice.selectFilters);
  const { page, perPage } = useSelector(slice.selectPaginationProduct);
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const {id} = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isLoading) {
      dispatch(slice.setDataDepartment({ id, data }));
    }
  }, [data]);

  let searchText = utils
    .initSelect(sliceState.dataDepartments)
    .filter((item: IProduct) => {
      return item.title
        .toLowerCase()
        .includes(sliceState.textSearch.toLowerCase());
    });

  React.useEffect(() => {
    if (sliceState.textSearch.length > 0)
    dispatch(slice.resetPageProduct());
  }, [sliceState.textSearch]);

  sliceState.menuValue !== "Все"
    ? (searchText = searchText.filter(
        (item: IProduct) => item.category == sliceState.menuValue
      ))
    : false;

  utils.selectOptionsSort(
    sliceState.filterSelect,
    productSortingArray,
    searchText
  );

  const pagination:object[] = utils.paginationCalculatorPage(searchText, page, perPage);
   
  return (
    <div className={styles.catalog}>
      {isError && <p>Error</p>}
      <div className={styles.search}>
        <ui.SearchInput
          placeholder="Поиск товара"
          register={sliceState.textSearch}
          onChange={(value) => dispatch(slice.setTextSearch(value))}
        />
        <ui.ButtonGoBack text="Вернуться к каталогу" />
        <component.FormAddProduct />
        <div className={styles.cart}>
          <ui.CustomLink to="/cart">
            <ui.ButtonMain bgColor="green">
              <img className={styles.cartPng} src={cartPng} alt="cartPng" />
              {order.length > 0 && <span>{order.length}</span>}             
              <div>{utils.formatterRub.format(utils.totalSum(order))}</div>
            </ui.ButtonMain>
          </ui.CustomLink>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles["container-info"]}>
            <component.Categories
              data={sliceState.dataDepartments}
              isLoading={isLoading}
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
            pagination.map((product) => (
              <component.CardProductCatalog
                product={product}
                {...product}
                key={product._id}
                />
            ))}
        </div>
      </div>
      <ui.CustomPagination
        totalCountries={searchText.length}
        counterPerPage={perPage}
        currentPage={page}
        clickNumber={(pageNumber: string) =>
          dispatch(slice.setPaginateProduct({ pageNumber }))
        }
        prevPage={() => dispatch(slice.setPrevPageProduct())}
        nextPage={(page: string) => dispatch(slice.setNextPageProduct(page))}
      />
    </div>
  );
});

export { Product };
