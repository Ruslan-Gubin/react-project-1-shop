import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryPosts } from "../../../data";
import { IPost } from "../../../models/iPost";
import { TypeRootState } from "../../store";
import { IinitialStatePosts } from "./types";

const initialState: IinitialStatePosts = {
    page: 1,
    perpage: 10,
    tags: '',
    search: '',
    category: categoryPosts[0].value,
    postUpdate:  {} as IPost
} 


const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    setCategoryPost(state, action: PayloadAction<{ value: string }>) {
      try {
        if (action.payload.value) {
          state.category = action.payload.value
        } 
      } catch (error) {
        throw new Error('Ошибка категории')
      }
    },

    setsearchValuePost(state, action: PayloadAction<{ value: string }>) {
      try {
        state.search = action.payload.value
        state.page = 1
      } catch (error) {
        throw new Error('Не заполнена строка поиска')
      }
    },
    
    setTagshValue(state, action: PayloadAction<{ value: string }>) {
      try {
        if (state.tags === action.payload.value) {
          state.tags = ''
      } else {
        state.tags = action.payload.value;
        state.page = 1
      }
      } catch (error) {
        console.log('Ошибка Тега',error)
      }
    },

    setUpdatePost(state, action: PayloadAction<IPost>) {
      state.postUpdate = action.payload
    },

    setUpdatePostRemove(state) {
      state.postUpdate = ''
    },

    setPrevPage(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPage(state, action: PayloadAction<number>) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginate(state, action: PayloadAction<{ pageNumber: number }>) {
      state.page = action.payload.pageNumber;
    },

    resetPage(state) {
      state.page = 1;
    },
   

  },

});

export const selectPosts = (state: TypeRootState) => state.posts;

export const postAction = postSlice.actions;

export const postReducer = postSlice.reducer;

