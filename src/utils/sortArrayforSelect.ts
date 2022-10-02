const sortArrayforSelect = (array) => {
  return array.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

const sortArrayforSelectDate = (array) => {
  return array.sort(
    (a, b) => parseFloat(a.updatedAt) - parseFloat(b.updatedAt)
  );
};

const sortArrayforSelectDiscount = (array) => {
  return array.sort((a, b) => parseFloat(a.discount) - parseFloat(b.discount));
};

const selectOptionsSort = (select, array, data) => {
  if (select === array[0]) {
    sortArrayforSelectDate(data);
  } else if (select === array[1]) {
    sortArrayforSelect(data);
  } else if (select === array[2]) {
sortArrayforSelect(data).reverse();
  } else if (select === array[3]) {
    sortArrayforSelectDiscount(data);
  }
};

export {
  sortArrayforSelect,
  sortArrayforSelectDate,
  sortArrayforSelectDiscount,
  selectOptionsSort,
};
