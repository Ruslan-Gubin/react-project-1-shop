import React from "react";
import styles from "./Categories.module.scss";

interface ICategories {
  data: string[];
  menuValue: string;
  handlerClick: (item: string) => void;
  horizontally?: boolean;
}

const Categories: React.FC<ICategories> = React.memo(
  ({ data, menuValue, handlerClick, horizontally = false }) => {
    const horizont = horizontally ? { display: "flex" } : { display: "" };

    return (
      <div style={horizont} className={styles.links}>
        {data.map((item) => (
          <div
            onClick={() => handlerClick(item)}
            key={item}
            className={menuValue === item ? styles.active : styles.item}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
);

export { Categories };
