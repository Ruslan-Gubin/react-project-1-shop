import React, { useEffect, useState } from "react";
import { categoryFilterName } from "../../../utils";

import styles from "./Categories.module.scss";

interface ICategories {
  data: [];
  isLoading: boolean;
  setMenuValue: () => void;
}


const Categories: React.FC<ICategories> = ({ data, isLoading, setMenuValue }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setMenuValue(activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.links}>
      {!isLoading &&
        categoryFilterName(data, true).map((item, index) => (
          <div
            onClick={() => setActiveCategory(index)}
            key={item}
            className={activeCategory === index ? styles.active : styles.item}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export { Categories };
