import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    addToOrders(state, action) {
      const newItem = action.payload.product;
      newItem.counter = +1;
      newItem.selected = true;
      state.order.push(newItem);
    },

    removeToOrder(state, action) {
      state.order = state.order.filter(
        (item) => item._id !== action.payload._id
      );
    },

    addCountProduct(state, action) {
      const newItem = action.payload.product;
      const prevItem = action.payload.order.find(
        (item) => item._id === action.payload._id
      );
      newItem.counter = prevItem.counter + 1;
      const lastArrayOrder = action.payload.order.filter(
        (item) => item._id !== action.payload._id
      );
      state.order = [...lastArrayOrder, newItem];
    },

    removeCountProduct(state, action) {
      const newItem = action.payload.product;
      if (newItem.counter > 1) {
        const prevItem = action.payload.order.find(
          (item) => item._id === action.payload._id
        );
        newItem.counter = prevItem.counter - 1;
        const lastArrayOrder = action.payload.order.filter(
          (item) => item._id !== action.payload._id
        );
        state.order = [...lastArrayOrder, newItem];
      }
    },
  },
});

export const {
  addToOrders,
  removeToOrder,
  addCountProduct,
  removeCountProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
