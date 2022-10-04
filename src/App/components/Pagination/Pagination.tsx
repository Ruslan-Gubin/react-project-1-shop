import React from 'react'
import { ButtonMain } from "../Ui";

import styles from './Pagination.module.scss';

const Pagination: React.FC = (props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalCountries / props.postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const prevPage = () =>
    props.currentPage !== 1 ? props.setCurrentPage((prev) => prev - 1) : false;

  const nextPage = () =>
    pageNumbers.length != props.currentPage
      ? props.setCurrentPage((prev) => prev + 1)
      : false;
  const paginate = (pageNumber) => props.setCurrentPage(pageNumber);

  return (
    <div className={styles.pagination}>
      {props.currentPage > 1 ? (
        <ButtonMain bgColor="info" onClick={prevPage}>
          Prev
        </ButtonMain>
      ) : (
        <ButtonMain bgColor="nobg">Prev</ButtonMain>
      )}
      {pageNumbers.map((page, index) => (
        <div
          key={index}
          onClick={() => paginate(page)}
          className={props.currentPage == page ? styles['current-page'] : styles.page}
        >
          {page}
        </div>
      ))}
      {props.currentPage! < pageNumbers.length ? (
        <ButtonMain bgColor="info" onClick={nextPage}>
          Next
        </ButtonMain>
      ) : (
        <ButtonMain bgColor="nobg">Next</ButtonMain>
      )}
    </div>
  );
};

export {Pagination};
