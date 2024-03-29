import React from "react";
import { playerApi } from "store/rtkQuery";

import { InventoryActive } from "../InventoryActive";
import { CellInventary } from "../CellInventary";
import {  dragUpdateArray, inventoryActiveFilter } from "utils";
import styles from "./PlayerInventory.module.scss";
import { InventoryPlayerType, IPlayerType } from "models/GameType";

interface PlayerInventoryType {
  playerData: IPlayerType
}

const PlayerInventory: React.FC<PlayerInventoryType> = ({playerData}) => {
  const [setInventaryOrder, {}] = playerApi.useSetInventoryUpdateMutation();
  const [activeInventory, { status }] = playerApi.useActiveInventoryMutation();
  const [currentInventory, setCurrentInventory] = React.useState<InventoryPlayerType | null>(null);
  const [dragActive, setDragActive] = React.useState(false);

  const handlerActiveInventary = async (inventory: InventoryPlayerType) => {
    if (!inventory.name ) return;
    if (status === "pending") return;
    try {
      if (playerData) {
        const inventoryUpdate = inventoryActiveFilter(
          inventory,
          playerData.inventory
        );
        await activeInventory({ inventoryUpdate, playerId: playerData._id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dragStartHandler = (data: InventoryPlayerType) => {
    setCurrentInventory(data);
    setDragActive(true);
  };

  const droptHandler = async (
    e: React.DragEvent<HTMLDivElement>,
    inventory: InventoryPlayerType
  ) => {
    e.preventDefault();
    setDragActive(false);
    if (playerData && currentInventory) {
      const inventoryUpdate = dragUpdateArray( playerData.inventory, inventory, currentInventory
      );
      await setInventaryOrder({ inventoryUpdate, playerId: playerData._id });
    }
  };

  const filterActiveInventary = React.useMemo(() => {
    const result = playerData?.inventory
      .filter((item) => item.status)
      .sort((a, b) => a.cell - b.cell);
      return  result
  }, [playerData]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.title}>
            <span>Герой</span>
          </div>

          <ul className={styles.playerBlockInventary}>
            {filterActiveInventary &&
              filterActiveInventary.map((inventory) => (
                <li key={inventory._id}>
                  <InventoryActive
                  handlerActiveInventary={handlerActiveInventary}
                  inventory={inventory}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.inventary}>
          <div className={styles.title}>
            <span>Инвентарь</span>
          </div>
          <ul className={styles.cellsContainer}>
            {playerData &&
              playerData.inventory.map((obj) => (
                <li key={obj._id}>
                  <CellInventary
                    dragActive={dragActive}
                    dragStartHandler={dragStartHandler}
                    droptHandler={droptHandler}
                    handlerActiveInventary={handlerActiveInventary}
                    data={obj}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { PlayerInventory };
