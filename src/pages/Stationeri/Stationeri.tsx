import { useCallback, useState } from "react";
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
  const [counterProduct] = useCounter(0)

  const initSelect = (data) => data.map(i => ({...i,counter: counterProduct}))

  const searchText = initSelect(data).filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  });

  const addToOrder = (id) => {
    const newItem = initSelect(data).find((item) => item._id === id);
    if (order.includes(newItem) === false) {
      setOrder([...order, newItem]);
    }
  };

  const removeToOrder = (id) => {
    const newItem = order.filter((item) => item._id !== id);
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

 const addProductLocal = useCallback((id) => {
   const newItem = order.find((item) => item._id === id);
   newItem.counter++
  const mapItem = order.filter(item => item._id !== id)
  console.log('render:  addProductLocal')
 return setOrder([...mapItem,newItem])
  },[order])

 const removeProductLocal = useCallback((id) => {
   const newItem = order.find((item) => item._id === id);
   newItem.counter--
  const mapItem = order.filter(item => item._id !== id)
  console.log('render:  removeProductLocal')
 return setOrder([...mapItem,newItem])
  },[order])

  const countRender = (id) => {
    const newItem = order.find((item) => item._id === id);
    console.log('render:  countRender')
    return newItem.counter
  }

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
        <Categories data={data} />
        <CustomSelect />
        
        </div>
        <div className="product-catalog__items">
          {!isLoading &&
            pagination.map((product) => (
              <CardProductCatalog
              countRender={countRender}
              removeProductLocal={removeProductLocal}
              addProductLocal={addProductLocal}
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
