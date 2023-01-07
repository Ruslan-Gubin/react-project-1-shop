import { PlayerOptionsModalType } from "store/slice/gameModalSlice/types"


const modalActiveAccordion = (arr: PlayerOptionsModalType[], value: string ) => {
  return arr.map(item => {
    if (item.value === value) {
      return {...item, status: true}
    } 
    if (item.value !== value) {
      return {...item, status: false}
    }
   return item
  })
}

export {modalActiveAccordion}