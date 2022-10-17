import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../../models/products";
import { setCategoryValue, resetPageProduct, selectFilters } from "../../../store/slice";
import { categoryFilterName } from "../../../utils";

import styles from "./Categories.module.scss";

interface ICategories {
  data: IProduct[];
  isLoading: boolean;
}

const Categories: React.FC<ICategories> = React.memo(({ data, isLoading }) => {
  const { menuValue } = useSelector(selectFilters);
  const dispath = useDispatch();

  const handlerClickCategory = (item:string) => {
    dispath(setCategoryValue({item}));
    dispath(resetPageProduct());
    
  };
  return (
    <div className={styles.links}>
      {!isLoading &&
        categoryFilterName(data, true).map((item:string) => (
          <div
            onClick={() => handlerClickCategory(item)}
            key={item}
            className={menuValue === item ? styles.active : styles.item}
          >
            {item}
          </div>
        ))}
    </div>
  );
});

export { Categories };
