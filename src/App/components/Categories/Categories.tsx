import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../../store/filterSlice/filterSlice";
import { categoryFilterName } from "../../../utils";

import styles from "./Categories.module.scss";

interface ICategories {
  data: [];
  isLoading: boolean;
  setMenuValue: () => void;
}


const Categories: React.FC<ICategories> = React.memo(({ data, isLoading }) => {
  const {menuId} = useSelector((state) => state.filters);
  const dispath = useDispatch()

  return (
    <div className={styles.links}>
      {!isLoading &&
        categoryFilterName(data, true).map((item, index) => (
          <div
            onClick={() => dispath(setCategoryId({item, index}))}
            key={item}
            className={menuId === index ? styles.active : styles.item}
          >
            {item}
          </div>
        ))}
    </div>
  );
});

export { Categories };
