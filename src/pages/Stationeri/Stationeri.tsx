import { useState } from "react";
import CardProductCatalog from "../../App/components/CardProductCatalog";
import Categories from "../../App/components/Categories";
import Pagination from "../../App/components/Pagination";
import { CustomSelect } from "../../App/components/CustomSelect";
import ButtonMain from "../../App/components/Ui/ButtonMain";
import InputMain from "../../App/components/Ui/InputMain";
import { useCounter } from "../../hooks";
import { useGetProductsQuery } from "../../store/product/productsApi";
import { formatterRub } from "../../utils/intl-Number-Format";
import paginationCalculatorPage from "../../utils/paginationCalculatorPage";
import FormAddProductUtils from "./stationeryUtils/FormAddProductUtils";
import { useSelector } from "react-redux";

const Stationeri = () => {
  const order = useSelector((state) => state.order.order);
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [textSearch, setTextSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const [counterProduct] = useCounter(0);

  const initSelect = (data) =>
    data.map((i) => ({ ...i, counter: counterProduct, selected: false }));

  const searchText = initSelect(data).filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  });

  const totalAmount = order.reduce(
    (acc, item) => acc + item.price * item.counter,
    0
  );

  const pagination = paginationCalculatorPage(
    searchText,
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
        <FormAddProductUtils />
        <ButtonMain bgColor="green">
          Общая сумма: {formatterRub.format(totalAmount)}
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
                product={product}
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
