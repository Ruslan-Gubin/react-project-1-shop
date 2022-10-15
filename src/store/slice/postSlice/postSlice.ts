import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../../models/products";
import { sortArrayforDatePost } from "../../../utils";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    post: [],
    searchValue: "",
  },
  reducers: {
    setStatePost(state, action) {
      const initialArray = action.payload.data.map((item: IPost) => item);     
      const sortDateArray = sortArrayforDatePost(initialArray)
      state.post = sortDateArray.filter((item: IPost) =>
        item.title.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },

    setsearchValuePost(state, action) {
      state.searchValue = action.payload.value;
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { setStatePost, setsearchValuePost } = postSlice.actions;

export default postSlice.reducer;
