import { useEffect, useState } from "react";
import { categoryFilterName } from "../../../utils";

const Categories = ({ data, isLoading , setMenuValue}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  useEffect(() => {
      setMenuValue(activeCategory)
  },[activeCategory])

  return (
    <div className="product-catalog__links">
      {!isLoading &&
        categoryFilterName(data, true).map((item, index) => (
          <div
          
            onClick={() => setActiveCategory(index)}
            key={item}
            className={
              activeCategory === index
                ? "product-catalog__links-item__active"
                : "product-catalog__links-item"
            }
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export {Categories};
