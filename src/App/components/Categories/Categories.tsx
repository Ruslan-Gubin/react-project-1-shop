import { categoryNameForData } from "../../../utils";

const Categories = ({ data }) => {
  
  return (
    <div className="product-catalog__links">
      {categoryNameForData(data).length &&
        categoryNameForData(data).map((item) => (
          <div key={item} className="product-catalog__links-item">
            {item}
          </div>
        ))}
    </div>
  );
};

export default Categories;
