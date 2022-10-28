import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/products";
import { TypeRootState } from "../../store";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order:<IProduct[]> [],
  },
  reducers: {

    addToOrders(state, action: PayloadAction<IProduct>) {
      const newItem:IProduct = action.payload;
      const img = newItem.images[0]
 
        state.order.push({
          ...newItem,
          counter: + 1,
          images: img,
          description: '',
        });      
    },

    removeToOrder(state, action:PayloadAction<{_id: string}>) {
      state.order = state.order.filter(
        (item) => item._id !== action.payload._id
        );
    },

    addCountGoods(state, action:PayloadAction<{_id: string}>) {
      const newItem = state.order.find(item => item._id === action.payload._id) 
      if(newItem) {
        newItem.counter = newItem.counter + 1;
      }   
    },
  
    removeCountGoods(state, action:PayloadAction<{_id: string}>) {
      const newItem = state.order.find(item => item._id === action.payload._id)    
      if (newItem &&  newItem.counter > 1) {
        newItem.counter = newItem.counter - 1;
      }
    },
    
    clearOrder(state) {
      state.order = []
    },

  },
});

export const selectOrder = (state: TypeRootState) => state.order

export const orderAction = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
