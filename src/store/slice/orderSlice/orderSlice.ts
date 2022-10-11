import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addToOrders(state, action) {
      const newItem = action.payload.product;
      newItem.counter = 1;
      newItem.selected = true;
      state.order.push(newItem);
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

  },
});

export const {
  addToOrders,
  removeToOrder,
  addCountGoods,
  removeCountGoods,
} = orderSlice.actions;

export default orderSlice.reducer;
