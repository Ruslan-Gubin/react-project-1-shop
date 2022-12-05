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
  remains: Number(''),
  
  optionsBodyUpdate: {
    id: '',
    title: '',
    department: '',
    description: '',
    newCategory: '',
    oldPrice: Number(''),
    price: Number(''),
    select: { value: "", label: "" },
    discount: Number(''),
    remainsImages: [],
    imageRemovesUpdate: [],
    imageAddUpdate: [],
    newQantity: Number(''),
  },

  error: [],
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setTitleValue(state, action: PayloadAction<{ value: number | string }>) {
      state.title = action.payload.value;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.title = state.title 
      }
    },

    setTextValue(state, action: PayloadAction<{ value: string }>) {
      state.description = action.payload.value;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.description = state.description
      }
    },

    setPriceValue(state, action: PayloadAction<{ value: number | string }>) {
      state.price = action.payload.value;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.price = state.price
      }
    },

    setOldPriceValue(state, action: PayloadAction<{ value: number | string }>) {
      state.oldPrice = action.payload.value;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.oldPrice = state.oldPrice
      }
    },

    setQuantityValue(state, action: PayloadAction<{ value: number | string }>) {
      state.quantity = action.payload.value;
      state.optionsBodyUpdate.newQantity = Number(state.remains) + Number(state.quantity)
      if (state.optionsBodyUpdate.newQantity < 0) {
        state.quantity = ''
        state.optionsBodyUpdate.newQantity = Number(state.remains) 
      }
      
    },

    setSelectValue(state, action: PayloadAction<SingleValue<Ioptions>>) {
      state.select = action.payload;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.select = state.select
      }
    },

    setnewCategoryValue(state,action: PayloadAction<{ value: string | number }>) {
      state.newCategory = String(action.payload.value);
      if (state.updatedStatus) {
        state.optionsBodyUpdate.newCategory = state.newCategory
      }
    },

    setDepartmentValue(state, action: PayloadAction<{ value: string }>) {
      state.department = action.payload.value;
      if (state.updatedStatus) {
        state.optionsBodyUpdate.department = state.department
      }
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
      state.updatedStatus = false
      state.id = ''
      addProductSlice.caseReducers.optionsUpdateCancel(state)
      state.remains = Number('')
    },

    setCloseModal(state) {
      state.modal = false;
      addProductSlice.caseReducers.cancelInputs(state);
    },

    addImages(state, action: PayloadAction<{ img: IImages | string }>) {
      state.optionsBodyUpdate.remainsImages = state.images.filter(item => item.url) // option remains Image
      
      if (!state.images.includes(action.payload.img) && state.images.length < 5) {
        state.images.push(action.payload.img);
      } 
      
      if (state.updatedStatus && state.optionsBodyUpdate.imageAddUpdate.length < 5 && !state.optionsBodyUpdate.imageAddUpdate.includes(action.payload.img) ) {
        state.optionsBodyUpdate.imageAddUpdate.push(action.payload.img)/// option add image
      }
    },

    removeImage(state, action: PayloadAction<{ arr: (IImages | string)[] , item: IImages | string }>) {
     const array = action.payload.arr

      if (typeof action.payload.item !== 'string') {
        const targetItem: IImages = action.payload.item
        const filterImage = array.filter(item => item !== targetItem)
        state.images = filterImage
        state.optionsBodyUpdate.remainsImages = filterImage

        if (state.updatedStatus   && !state.optionsBodyUpdate.imageRemovesUpdate.includes(targetItem.public_id) ) {  
          state.optionsBodyUpdate.imageRemovesUpdate.push(targetItem.public_id)  //option remove image 
        }

      } else {
        const targetString: string = action.payload.item
        state.images = array.filter(item => item !== targetString)

        if (state.updatedStatus && targetString) {
          state.optionsBodyUpdate.imageAddUpdate = state.optionsBodyUpdate.imageAddUpdate.filter(item => item !== targetString)  //option add image
        }
      }
    },

    configModalActive(state, action: PayloadAction<IProduct>) {
      const {title, department, description, oldPrice, price, quantity, category, images, _id,} = action.payload
      
      state.remains = Number(quantity)
      state.updatedStatus = true
      state.id = _id ? _id : ''
      state.title = title ? title : ''
      state.department = department ? department : ''
      state.description = description ? description : ''
      state.oldPrice = Number(oldPrice)
      state.price = Number(price)
      state.select = { value: category ? category: '', label: category ? category : '' }
      state.images = images
      state.modal = true
      
      addProductSlice.caseReducers.optionsUpdateProduct(state)
    },

    optionsUpdateProduct(state) {
      state.optionsBodyUpdate = {
        id: state.id,
        title: String(state.title),
        department: state.department,
        description: state.description,
        oldPrice: Number(state.oldPrice),
        price: Number(state.price),
        newQantity: Number(state.remains),
        select: state.select,
        imageRemovesUpdate: [],
        imageAddUpdate: [],

        discount: Math.ceil(((Number(state.price) - Number(state.oldPrice)) / Number(state.oldPrice)) * 100),
      }
      state.optionsBodyUpdate.remainsImages = state.images.filter(item => item)  //heck image start
  },

    optionsUpdateCancel(state) {
      state.optionsBodyUpdate = {
        id: '',
        title: '',
        department: '',
        description: '',
        oldPrice: Number(''),
        price: Number(''),
        newQantity: Number(''),
        select: { value: "", label: "" },
        discount: Number(''),
        newCategory: '',
        remainsImages: [],
        imageRemovesUpdate: [],
        imageAddUpdate: [],
      }
  },

    setErrors(state) {
      if (!state.title && !state.optionsBodyUpdate ) {
        state.error.push('Введите заголовок')
      }
      // state.optionsBodyUpdate = {
      //   id: '',
      //   title: '',
      //   department: '',
      //   description: '',
      //   oldPrice: Number(''),
      //   price: Number(''),
      //   newQantity: Number(''),
      //   select: { value: "", label: "" },
      //   discount: Number(''),
      //   newCategory: '',
      //   remainsImages: [],
      //   imageRemovesUpdate: [],
      //   imageAddUpdate: [],
      // }
  },



   
  },
});

export const selectAddProduct = (state: TypeRootState) => state.addProduct;

export const addProductAction = addProductSlice.actions;

export const addProductReducer = addProductSlice.reducer;