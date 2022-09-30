import { useState } from "react";
import { categoryFilterName } from "../../../utils";

const Categories = ({ data, isLoading }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="product-catalog__links">
      {!isLoading &&
        categoryFilterName(data).map((item, index) => (
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

export default Categories;
