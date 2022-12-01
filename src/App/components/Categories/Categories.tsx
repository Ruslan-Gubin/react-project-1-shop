import React from "react";
import { IcategotyPosts } from "data/tegsAndComments";
import styles from "./Categories.module.scss";

interface ICategories {
  data: IcategotyPosts[];
  menuValue: string;
  handlerClick: (value: {label: string, value: string}) => void;
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
            key={item.value}
            className={menuValue === item.value ? styles.active : styles.item}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
);

export { Categories };
