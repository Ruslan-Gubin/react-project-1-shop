import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/products";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {

    addToOrders(state, action) {
      const newItem = action.payload;
      const img = newItem.images[0]
 
        state.order.push({
          ...newItem,
          counter: + 1,
          images: img,
          description: '',
        });      
    },

    removeToOrder(state, action) {
      state.order = state.order.filter(
        (item) => item._id !== action.payload._id
        );
    },

    addCountGoods(state, action) {
      const newItem = state.order.find(item => item._id === action.payload._id)    
      newItem.counter = newItem.counter + 1;
    },
  
    removeCountGoods(state, action) {
      const newItem = state.order.find(item => item._id === action.payload._id)    
      if (newItem.counter > 1) {
        newItem.counter = newItem.counter - 1;
      }
    },
    
    clearOrder(state) {
      state.order = []
    },

  },
});

export const selectOrder = (state) => state.order

export const {
  removeCountGoods,
  removeToOrder,
  addCountGoods,
  addToOrders,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
