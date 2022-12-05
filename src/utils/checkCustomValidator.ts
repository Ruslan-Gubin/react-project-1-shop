import { IErroraddProduct, IImages } from "store/slice/addProductSlice/type"


const checkCustomValidator = (value1: string | number, value2: string | number, textError: string ): string => {
  if (String(value1).length < 3 && String(value2).length < 3) {
    return textError
  } {
    return  ''
  }
}

const checkImagesValidator = (images: (string | IImages)[], textErrors: string): string => {
  if (images.length <= 0) {
    return textErrors
  } else {
    return ''
  }
}

const checkAddProductValidator = (erorrObj: IErroraddProduct): string[] => {
    const res = []
    const map  = erorrObj

    for (let value in map){
      if (map[value]) {
        res.push( map[value])
      } 
    }

    
    return res
}

export {checkCustomValidator, checkImagesValidator,checkAddProductValidator}