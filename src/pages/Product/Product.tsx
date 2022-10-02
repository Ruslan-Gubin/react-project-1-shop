import {  useEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks";
import { useGetProductsQuery } from "../../store/product/productsApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as utils from "../../utils";
import * as component from "../../App/components";
import { ButtonGoBack, ButtonMain, InputMain } from "../../App/components/Ui";
import { productSortingArray } from "../../data";

const Product = () => {
  const order = useSelector((state) => state.order.order);
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [textSearch, setTextSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(productSortingArray[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [counterProduct] = useCounter(0);
  const [dataDepartment, setDataDepartment] = useState([]);
  const [menuValue, setMenuValue] = useState("");
  const id = useParams();

  useEffect(() => {
    if (!isLoading) {
      setDataDepartment(utils.filterDataDepatment(id, data));
    }
  }, []);

  let searchTextRef = useRef();

  const initSelect = (data) =>
    data.map((i) => ({
      ...i,
      counter: counterProduct,
      selected: false,
      discount: utils.sumDiscount(i.price, i.oldPrice),
    }));

  searchTextRef = initSelect(dataDepartment).filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  });

  const menuSortCategoryIndex = utils.categoryFilterName(dataDepartment, false)[
    menuValue
  ];

  menuValue !== 0
    ? (searchTextRef = searchTextRef.filter(
        (item) => item.category == menuSortCategoryIndex
      ))
    : false;
      
  utils.selectOptionsSort(selectedOption, productSortingArray, searchTextRef);

  const totalAmount = order.reduce(
    (acc, item) => acc + item.price * item.counter,
    0
  );

  const pagination = utils.paginationCalculatorPage(
    searchTextRef,
    currentPage,
    postsPerPage
  );

  return (
    <div className="product-catalog container">
      {isError && <p>Error</p>}
      <div className="product-catalog__input-search">
        <InputMain
          placeholder="Поиск"
          text={textSearch}
          setText={setTextSearch}
        />
        <ButtonGoBack text="Вернуться к каталогу" />
        <component.FormAddProduct department={utils.getValueObject(id)} />
        <ButtonMain bgColor="green">
          Общая сумма: {utils.formatterRub.format(totalAmount)}
        </ButtonMain>
      </div>
      <div className="product-catalog__container">
        <div className="product-catalog__container-info">
          <component.Categories
            data={dataDepartment}
            setMenuValue={setMenuValue}
            isLoading={isLoading}
          />
          <component.CustomSelect
            options={productSortingArray}
            onChange={(value) => setSelectedOption(value)}
            defaultValue={selectedOption}
          />
        </div>
        <div className="product-catalog__items">
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
        postsPerPage={postsPerPage}
        totalCountries={searchTextRef.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { Product };
