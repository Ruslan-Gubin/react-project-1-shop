import { createSlice } from '@reduxjs/toolkit';

const stationerySlice = createSlice({
    name: 'stationery',
    initialState: {
        data: [],
    },
    reducers: {
        addStationery(state, action) {

        },
        removeStationery(state, action) {

        },
        toggleProductBuy(state, action) {

        }, 
    }
})

export const {addStationery, removeStationery,toggleProductBuy} = stationerySlice.actions

export default stationerySlice.reducer