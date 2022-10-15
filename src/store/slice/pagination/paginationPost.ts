import { createSlice } from "@reduxjs/toolkit";

interface IpaginationProduct {
  page: number;
  perPage: number;
}

const paginationPostSlice = createSlice({
  name: "paginationPost",
  initialState: {
    page: 1,
    perPage: 12,
  },

  reducers: {
    setPrevPagePost(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPagePost(state, action) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginatePost(state, action) {
      state.page = action.payload.pageNumber;
    },

    resetPagePost(state) {
      state.page = 1;
    },
  },
});

export const selectPaginationPost = (state) => state.paginationPost

export const { resetPagePost, setPrevPagePost, setNextPagePost, setPaginatePost } =
paginationPostSlice.actions;

export default paginationPostSlice.reducer;