import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../store";

interface IpaginationProduct {
  page: number;
  perPage: number;
}

const paginationProductSlice = createSlice({
  name: "paginationProduct",
  initialState:<IpaginationProduct> {
    page: 1,
    perPage: 12,
  },

  reducers: {
    setPrevPageProduct(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPageProduct(state, action: PayloadAction<number>) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginateProduct(state, action: PayloadAction<{pageNumber: number}>) {
      state.page = action.payload.pageNumber;
    },

    resetPageProduct(state) {
      state.page = 1;
    },
  },
});

export const selectPaginationProduct = (state: TypeRootState) => state.paginationProduct;

export const {
  setPrevPageProduct,
  setNextPageProduct,
  setPaginateProduct,
  resetPageProduct,
} = paginationProductSlice.actions;

export default paginationProductSlice.reducer;
