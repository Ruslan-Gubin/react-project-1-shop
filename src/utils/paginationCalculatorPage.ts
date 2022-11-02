

const paginationCalculatorPage = (
  data: Object[],
  currentPage: number,
  perPage: number
) => {

  const lastIndex = currentPage * perPage;  //10
  const firstIndex = lastIndex - perPage; // 0
  const currentPosts = data.slice(firstIndex, lastIndex);
  return currentPosts;
};
export { paginationCalculatorPage };
