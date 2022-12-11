import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "models/products";
import { TypeRootState } from "store/store";
import { IOrderObj } from "./types";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: <IOrderObj[]>[],
  },
  reducers: {
    addToOrders(state, action: PayloadAction<IProduct>) {
      const newItem: IProduct = action.payload;

      state.order.push({
        ...newItem,
        counter: +1,
        images: newItem.images[0] ? newItem.images[0] : null,
        description: "",
      });
    },

    removeToOrder(state, action: PayloadAction<{ _id: string }>) {
      state.order = state.order.filter(
        (item) => item._id !== action.payload._id
      );
    },

    addCountGoods(
      state,
      action: PayloadAction<{ _id: string; quentity: number | string }>
    ) {
      const newItem = state.order.find(
        (item) => item._id === action.payload._id
      );
      if (newItem && newItem?.counter < action.payload.quentity) {
        newItem.counter = newItem.counter + 1;
      }
    },

    removeCountGoods(state, action: PayloadAction<{ _id: string }>) {
      const newItem = state.order.find(
        (item) => item._id === action.payload._id
      );
      if (newItem && newItem.counter > 1) {
        newItem.counter = newItem.counter - 1;
      }
    },

    clearOrder(state) {
      state.order = [];
    },
  },
});

export const selectOrder = (state: TypeRootState) => state.order;

export const orderAction = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
