import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../../models/auth";
import { TypeRootState } from "../../store";

interface IinitState {
  auth: IAuth
  status: boolean
  email: string
  password: string
}

const initialState:IinitState = {
  auth: {},
  status: false,
  email: '',
  password: '1234qwer',
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    addAuth(state, action: PayloadAction<IAuth>) {
      state.auth = action.payload
      state.auth.token &&  window.localStorage.setItem('token', state.auth.token)
      state.status = true
      
    },
    
    resetAuth(state) {
      state.auth = {}
      window.localStorage.removeItem('token')
      state.status = false
    },

    getAutchEmail(state, action:PayloadAction<{value: string}>) {
      state.email = action.payload.value
    },

    getAutchPassword(state, action:PayloadAction<{value: string}>) {
      state.password = action.payload.value
    },

  },
});

export const selectAuth = (state: TypeRootState) => state.auth

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;