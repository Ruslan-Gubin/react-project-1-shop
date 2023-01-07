import { InventoryPlayerType } from "models/GameType";

const inventoryActiveFilter = (inventory: InventoryPlayerType, inventaryPlayer:InventoryPlayerType[]) => {
  
  const checkActiveInventory = inventaryPlayer.map(item => {
    if (item.purpose === inventory.purpose && item !== inventory) {
      return {...item, status: false}
    }
    return item
  })

 const result = checkActiveInventory.map(item =>  {
   if (item._id === inventory._id) {
    const prevStatus = item.status
     return  {...item, status: !prevStatus}
    }
  return item
  })

  return result
}

export {inventoryActiveFilter}