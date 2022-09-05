import { useCallback, useState } from "react";
import CardProductCatalog from "../../App/components/CardProductCatalog";
import Pagination from "../../App/components/Pagination";
import InputMain from "../../App/components/Ui/InputMain";
import { IProduct } from "../../models/products";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../store/product/productsApi";
import paginationCalculatorPage from "../../utils/paginationCalculatorPage";
import FormAddProductUtils from "./stationeryUtils/FormAddProductUtils";

const Stationeri = () => {
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [removeProduct, {}] = useRemoveProductMutation();
  const [textSearch, setTextSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [clickMenuPens,setClickMenuPens] = useState(true)

  const searchText = data.filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  });
  const handlerCategoriPens = searchText.filter((item) => {
    if (clickMenuPens) {
return item.category.includes('pens')

}

})
console.log(handlerCategoriPens);
     
    

  

  const handlerRemovePdoduct = useCallback(
    async (product: IProduct) => {
      await removeProduct(product).unwrap();
    },
    [removeProduct]
  );

  const pagination = paginationCalculatorPage(
    handlerCategoriPens,
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
      </div>
      <div className="product-catalog__container ">
        <div className="product-catalog__links">
          <div onClick={()=> setClickMenuPens(!clickMenuPens)} className="product-catalog__links-item" >Ручки</div>
          <div className="product-catalog__links-item">Тетради</div>
          <div className="product-catalog__links-item">Дневники</div>
          <div className="product-catalog__links-item">Пластилин</div>
        </div>
        <div className="product-catalog__items">
          {!isLoading &&
            pagination.map((product) => (
              <CardProductCatalog
                product={product}
                remove={handlerRemovePdoduct}
                key={product._id}
              />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalCountries={handlerCategoriPens.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Stationeri;