import React from "react";
import { ButtonMain } from "../ButtonMain";
import styles from "./CustomPagination.module.scss";

interface IPagination {
  totalCountries: number | undefined | false;
  counterPerPage: number;
  currentPage: number;
  clickNumber: (value: number) => void;
  prevPage: (value: number) => void;
  nextPage: Function;
}

const CustomPagination: React.FC<IPagination> = React.memo(
  ({
    counterPerPage,
    totalCountries,
    currentPage,
    clickNumber,
    prevPage,
    nextPage,
  }) => {
    const pageNumbers = [];

    if (totalCountries && counterPerPage) {
      for (let i = 1; i <= Math.ceil(totalCountries / counterPerPage); i++) {
        pageNumbers.push(i);
      }
    }

    return (
      <div className={styles.pagination}>
        {currentPage > 1 ? (
          <ButtonMain
            bgColor="info"
            onClick={() => prevPage(pageNumbers.length)}
          >
            Prev
          </ButtonMain>
        ) : (
          <ButtonMain bgColor="nobg">Prev</ButtonMain>
        )}
        {pageNumbers.map((page, index) => (
          <div
            key={index}
            onClick={() => clickNumber(page)}
            className={
              currentPage == page ? styles["current-page"] : styles.page
            }
          >
            {page}
          </div>
        ))}
        {currentPage! < pageNumbers.length ? (
          <ButtonMain bgColor="info" onClick={() => nextPage()}>
            Next
          </ButtonMain>
        ) : (
          <ButtonMain bgColor="nobg">Next</ButtonMain>
        )}
      </div>
    );
  }
);

export { CustomPagination };
