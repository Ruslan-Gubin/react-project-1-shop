import { createSlice } from "@reduxjs/toolkit";

interface IpaginationProduct {
  page: number;
  perPage: number;
}

const paginationProductSlice = createSlice({
  name: "paginationProduct",
  initialState: {
    page: 1,
    perPage: 12,
  },

  reducers: {
    setPrevPageProduct(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPageProduct(state, action) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginateProduct(state, action) {
      state.page = action.payload.pageNumber;
    },

    resetPageProduct(state) {
      state.page = 1;
    },
  },
});

export const {
  setPrevPageProduct,
  setNextPageProduct,
  setPaginateProduct,
  resetPageProduct,
} = paginationProductSlice.actions;

export default paginationProductSlice.reducer;
