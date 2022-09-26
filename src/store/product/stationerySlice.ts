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
            // state.data = state.data.filter(item => item.id !== action.payload.id)
        //  const newItem =  order.filter(item => item._id !== id)
        //  return setOrder(newItem)
        console.log('object')
        },
        toggleProductBuy(state, action) {

        }, 
    }
})

export const {addStationery, removeStationery,toggleProductBuy} = stationerySlice.actions

export default stationerySlice.reducer