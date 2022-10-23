import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../store";

interface IinitState {
  auth: Object
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

    addAuth(state, action: PayloadAction<any>) {
      state.auth = action.payload
      window.localStorage.setItem('token', state.auth.token)
      state.status = true
      
    },
    
    resetAuth(state) {
      state.auth = []
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

export const {
  getAutchEmail,
  getAutchPassword,
  addAuth,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;