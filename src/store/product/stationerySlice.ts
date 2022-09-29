import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [],
    },
    reducers: {
        addToOrders(state, action) {
            const newItem = action.payload.product
            newItem.counter++
            state.order.push(newItem)
        },

        removeToOrder(state, action) {
            state.order = state.order.filter(item => item._id !== action.payload._id)
        },

        countPrice(state, action) {}, 
        addProductLocal(state, action) {}, 
        removeProductLocal(state, action) {}, 
        countRender(state, action) {}, 
    }
})

export const {addToOrders, removeToOrder,countPrice,addProductLocal,removeProductLocal,countRender} = orderSlice.actions

export default orderSlice.reducer