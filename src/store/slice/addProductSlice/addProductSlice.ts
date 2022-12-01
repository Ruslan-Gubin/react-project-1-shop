import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";
import { Ioptions } from "App/components/CustomSelect/CustomSelect";
import { IProduct } from "models/products";
import { TypeRootState } from "store/store";
import { IaddProductSlice, IImages } from "./type";

const initialState: IaddProductSlice = {
  id: "",
  department: "",
  title: "",
  description: "",
  price: "",
  oldPrice: "",
  quantity: "",
  select: { value: "", label: "" },
  newCategory: "",
  modal: false,
  updatedStatus: false,
  images: [],
  imageRemovesUpdate: [],
  imageAddUpdate: [],
  remainsImages: [],

  error: {
    title: "",
    text: "",
  },
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setTitleValue(state, action: PayloadAction<{ value: number | string }>) {
      state.title = action.payload.value;
    },

    setTextValue(state, action: PayloadAction<{ value: string }>) {
      state.description = action.payload.value;
    },

    setPriceValue(state, action: PayloadAction<{ value: number | string }>) {
      state.price = action.payload.value;
    },

    setOldPriceValue(state, action: PayloadAction<{ value: number | string }>) {
      state.oldPrice = action.payload.value;
    },

    setQuantityValue(state, action: PayloadAction<{ value: number | string }>) {
      state.quantity = action.payload.value;
    },

    setSelectValue(state, action: PayloadAction<SingleValue<Ioptions>>) {
      state.select = action.payload;
    },

    setnewCategoryValue(
      state,
      action: PayloadAction<{ value: string | number }>
    ) {
      state.newCategory = String(action.payload.value);
    },

    setDepartmentValue(state, action: PayloadAction<{ value: string }>) {
      state.department = action.payload.value;
    },

    setToggleModal(state) {
      if (state.modal) {
        state.modal = false;
        addProductSlice.caseReducers.cancelInputs(state);
      } else {
        state.modal = true;
      }
    },

    cancelInputs(state) {
      state.title = "";
      state.newCategory = "";
      state.oldPrice = "";
      state.price = "";
      state.quantity = "";
      state.description = "";
      state.images = [];
      state.modal = false;
      state.imageRemovesUpdate = []
      state.imageAddUpdate = []
      state.updatedStatus = false
      state.remainsImages = []
    },

    setCloseModal(state) {
      state.modal = false;
      addProductSlice.caseReducers.cancelInputs(state);
    },

    addImages(state, action: PayloadAction<{ img: string }>) {
      state.remainsImages = state.images.filter(item => item.url)
      const res = state.images;
      if (!res.includes(action.payload.img) && res.length < 5) {
        res.push(action.payload.img);
        state.images = res;
      } 
      
      if (state.updatedStatus && state.imageAddUpdate.length < 5 && !state.imageAddUpdate.includes(action.payload.img)) {
        state.imageAddUpdate.push(action.payload.img)
      }
    },

    removeImage(state, action: PayloadAction<{ arr: string[] & IImages[], item: string | IImages }>) {
      const target = action.payload.item
      const arr = action.payload.arr
      const remains = arr.filter(imag => imag !== target)
      state.remainsImages = remains.filter(item => item.url)
      state.images = remains
      if (state.updatedStatus && target.public_id && !state.imageRemovesUpdate.includes(target.public_id)) { 
        state.imageRemovesUpdate.push(target.public_id)
      }

      if (state.updatedStatus && !target.public_id) {
        state.imageAddUpdate = state.imageAddUpdate.filter(item => item !== target)
      }
    },

    configModalActive(state, action: PayloadAction<IProduct>) {
      const {title, department, description, oldPrice, price, quantity, category, images, _id,} = action.payload
      
    state.remainsImages = images.filter(item => item.url)   //heck image start
      
    state.updatedStatus = true
    state.id = _id ? _id : ''
    state.title = title ? title : ''
    state.department = department ? department : ''
    state.description = description ? description : ''
    state.oldPrice = Number(oldPrice)
    state.price = Number(price)
    state.quantity = Number(quantity)
    state.select = { value: category ? category: '', label: category ? category : '' }
    state.images = images
    state.modal = true


    },

    setUpdateProduct(state, action: PayloadAction<IProduct>) {

    },
  },
});

export const selectAddProduct = (state: TypeRootState) => state.addProduct;

export const addProductAction = addProductSlice.actions;

export const addProductReducer = addProductSlice.reducer;
