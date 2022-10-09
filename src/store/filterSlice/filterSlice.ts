import { createSlice } from "@reduxjs/toolkit"
import { productSortingArray } from "../../data"
import { getValueObject, sumDiscount } from "../../utils"



const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    menuId: 0,
    menuValue: 'Все',
    paginationPage: 1,
    filterSelect: productSortingArray[0],
    dataDepartments: [],
    textSearch: '',
  },
  reducers: {

    setCategoryId(state, action) {
        state.menuValue = action.payload.item
        state.menuId = action.payload.index
    },

    resetMenuId(state) {
      state.menuValue = 'Все'
      state.menuId = 0
      state.textSearch = ''
    },

    setSelectId(state, action) {
      state.filterSelect = action.payload.value
    },

    setDataDepartment(state, action) {
    state.dataDepartments = action.payload.data.filter(item => item.department == getValueObject(action.payload.id))
    },

    setTextSearch(state, action) {
    state.textSearch = action.payload
    },

  }

})

export const {
  setDataDepartment,
  setCategoryId,
  resetMenuId,
  setSelectId,
  setTextSearch,
} = filterSlice.actions

export default filterSlice.reducer;