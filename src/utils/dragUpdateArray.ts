import { InventoryPlayerType } from "models/GameType";

const dragUpdateArray = (
  array: InventoryPlayerType[],
  inventory: InventoryPlayerType,
  currentInventory: InventoryPlayerType
) => {
  return array.map((item) => {
    if (item._id === currentInventory._id) {
      return { ...item, order: inventory.order };
    }
    if (item._id === inventory._id) {
      return { ...item, order: currentInventory.order };
    }
    return item;
  });
};

export { dragUpdateArray };
