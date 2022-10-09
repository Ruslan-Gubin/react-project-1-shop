import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../store/productApi/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as utils from "../../utils";
import * as component from "../../App/components";
import * as ui from "../../App/components/Ui";
import * as slice from "../../store/filterSlice/filterSlice";
import { productSortingArray } from "../../data";
import styles from "./Product.module.scss";
import cartPng from "../../assets/img/icons/shopping-cart.png";

const Product = React.memo(() => {
  const order = useSelector((state) => state.order.order);
  const sliceState = useSelector((state) => state.filters);
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    if (!isLoading) {
      dispatch(slice.setDataDepartment({ id, data }));
    }
  }, [data]);

  const initSelect = (data) =>
    data.map((i) => ({
      ...i,
      counter: 0,
      selected: false,
      discount: utils.sumDiscount(i.price, i.oldPrice),
    }));
   

  let searchText = initSelect(sliceState.dataDepartments).filter((item) => {
    return item.name.toLowerCase().includes(sliceState.textSearch.toLowerCase());    
  });

  sliceState.menuValue !== "Все"
    ? (searchText = searchText.filter(
        (item) => item.category == sliceState.menuValue
      ))
    : false;

  utils.selectOptionsSort(
    sliceState.filterSelect,
    productSortingArray,
    searchText
  );

  const pagination = utils.paginationCalculatorPage(
    searchText,
    currentPage,
    productPerPage
  );

  return (
    <div className={styles.catalog}>
      {isError && <p>Error</p>}
      <div className={styles.search}>
        <ui.SearchInput
          placeholder="Поиск товара"
          register={sliceState.textSearch}
          onChange={(value: string) => dispatch(slice.setTextSearch(value))}
        />
        <ui.ButtonGoBack text="Вернуться к каталогу" />
        <component.FormAddProduct
          data={sliceState.dataDepartments}
          department={utils.getValueObject(id)}
        />
        <div className={styles.cart}>
          <ui.CustomLink to="/cart">
            <ui.ButtonMain bgColor="green">
              <img className={styles.cartPng} src={cartPng} alt="cartPng" />
              <div className={styles.totalPrice}>
                {utils.formatterRub.format(utils.totalSum(order))}
              </div>
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
      <component.Pagination
        currentPage={currentPage}
        postsPerPage={productPerPage}
        totalCountries={searchText.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
});

export { Product };
