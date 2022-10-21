export {
  selectPaginationPost,
  resetPagePost,
  paginationPostSlice,
  setPrevPagePost,
  setNextPagePost,
  setPaginatePost,
} from "./paginationPostSlice";

export {
  setFilterPagination,
  setPrevPageProduct,
  setNextPageProduct,
  setPaginateProduct,
  setSearchTextForMenu,
  selectFilters,
  filterSlice,
  setDataDepartment,
  setCategoryValue,
  resetMenuId,
  setSelectId,
  setTextSearch,
} from "./filterSlice";

export {
  selectOrder,
  orderSlice,
  clearOrder,
  addToOrders,
  removeToOrder,
  addCountGoods,
  removeCountGoods,
} from "./orderSlice";

export {
  selectTodos,
  todoSlice,
  addTodo,
  removeTodo,
  toggleTodoComplete,
} from "./todoSlice";

export {
  selectPosts,
  setsearchValuePost,
  postSlice,
  setStatePost,
} from "./postSlice";


export {
  addAuth,
  resetAuth,
  selectAuth,
  authSlice,
  getAutchEmail,
  getAutchPassword,
} from "./authSlice";


