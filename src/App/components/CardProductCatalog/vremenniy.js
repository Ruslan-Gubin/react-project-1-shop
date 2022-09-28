import { useEffect, useRef, useState } from "react";
import { useCounter } from "../../../hooks";
import { useRemoveProductMutation } from "../../../store/product/productsApi";
import { formatterRub } from "../../../utils/intl-Number-Format";
import ButtonMain from "../Ui/ButtonMain";

const CardProductCatalog = ({
  _id,
  name,
  price,
  oldPrice,
  img,
  img2,
  addToOrder,
  removeToOrder,
  order,
  product,
}) => {
  const [removeProduct, {}] = useRemoveProductMutation();
  const [buttonBye, setButtonBye] = useState(false);
  const [counterProduct,addCounterProduct,removeCounterProduct] = useCounter(0)

  const ref = useRef(_id);

  const handlerClickBue = (id) => {
    return addToOrder(id), setButtonBye(true);
  };

  const handlerRemoveLocal = (id) => {
    return removeToOrder(id), setButtonBye(false);
  };

  useEffect(() => {
    for (let i = 0; i < order.length; i++) {
      const item = order[i];
      if (ref.current === item._id) {
        setButtonBye(true);
      }
    }
  }, [buttonBye]);

  const sumPersent = (a, b) => Math.ceil(((a - b) / b) * 100);

  return (
    <div className="card-product__wrapper">
      <div className="card-product__container">
        <div className="card-product__header">
          <img
            className="card-product__header-img"
            alt="img"
            src={img || img2}
          />
        </div>
        <div className="card-product__body">
          <div className="card-product__body-prices">
            {oldPrice && (
              <div className="card-product__body-prices-precent">
                Скидка:{sumPersent(price, oldPrice)}%
              </div>
            )}
            <div className="card-product__body-prices-price">{formatterRub.format(price)}</div>

            <div className="card-product__body-prices-oldprice">{formatterRub.format(oldPrice)}</div>
          </div>
          <div className="card-product__body-name">{name}</div>
        </div>
        <div className="card-product__footer">
          <div className="card-product__footer-buttons">
            {buttonBye ? (
              <ButtonMain
              onClick={() => handlerRemoveLocal(_id)}
              bgColor="secondary"
              >
                В Корзине:{() => counterProduct(_id)}
              </ButtonMain>
            ) : (
              <ButtonMain 
              onClick={handlerClickBue}>
                В Корзину
              </ButtonMain>
            )}
            {buttonBye && 
            <>
              <ButtonMain onClick={addCounterProduct} bgColor="green">+</ButtonMain>
              <ButtonMain onClick={removeCounterProduct} bgColor="green">-</ButtonMain>
            </>
            }
            {!buttonBye && 
            <ButtonMain onClick={() => removeProduct(product)} bgColor="red">
              Удалить
            </ButtonMain>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductCatalog;


//==============================================================


import { useState } from "react";
import CardProductCatalog from "../../App/components/CardProductCatalog";
import Categories from "../../App/components/Categories";
import Pagination from "../../App/components/Pagination";
import {CustomSelect} from "../../App/components/CustomSelect";
import ButtonMain from "../../App/components/Ui/ButtonMain";
import InputMain from "../../App/components/Ui/InputMain";
import { useCounter, useLocaleStorage } from "../../hooks";
import { useGetProductsQuery } from "../../store/product/productsApi";
import { formatterRub } from "../../utils/intl-Number-Format";
import paginationCalculatorPage from "../../utils/paginationCalculatorPage";
import FormAddProductUtils from "./stationeryUtils/FormAddProductUtils";

const Stationeri = () => {
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [textSearch, setTextSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [order, setOrder] = useLocaleStorage([], "order");
  const [counterProduct,addCounterProduct,removeCounterProduct] = useCounter(0)
console.log(order)
  const initSelect = (data) => data.map(i => ({...i,counter: counterProduct}))
  const newData = initSelect(data)
  

  const searchText = newData.filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  })

  const addToOrder =  (id) => {
    const newItem =  newData.find((item) => item._id === id);
    if (!order.includes(newItem)) {
        setOrder([...order, newItem]);
      } 
  };

  const removeToOrder =  (id) => {
    const newItem =  order.filter((item) => item._id !== id);
    console.log(newItem);
    return setOrder(newItem);
  };

  const pagination = paginationCalculatorPage(
    searchText,
    currentPage,
    postsPerPage
  );

  const countPrice = (order) => {
    return order.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className="product-catalog container">
      {isError && <p>Error</p>}
      <div className="product-catalog__input-search">
        <InputMain
          placeholder="Поиск"
          text={textSearch}
          setText={setTextSearch}
        />
        <FormAddProductUtils />
        <ButtonMain bgColor="green">
          {formatterRub.format(countPrice(order))}
        </ButtonMain>
      </div>

      <div className="product-catalog__container">
        <div className="product-catalog__container-info">
        <Categories data={newData} />
        <CustomSelect  />

        </div>
        <div className="product-catalog__items">
          {!isLoading &&
            pagination.map((product) => (
              <CardProductCatalog
              product={product}
                order={order}
                removeToOrder={removeToOrder}
                addToOrder={addToOrder}
                {...product}
                key={product._id}
              />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalCountries={searchText.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Stationeri;