import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './increment';

export const store = configureStore({
    reducer: counterSlice.reducer
  });
