import React from "react";
import { useHoverHits } from "hooks";
import { LayoutMiltyHits } from "../LayoutMiltyHits";

import styles from "./CellInventary.module.scss";
import { InventoryPlayerType } from "models/GameType";

interface CellInventaryType {
  data: InventoryPlayerType;
  dragActive: boolean;
  handlerActiveInventary: (data: any) => void;
  droptHandler: (
    e: React.DragEvent<HTMLDivElement>,
    data: InventoryPlayerType
  ) => void;
  dragStartHandler: (data: InventoryPlayerType) => void;
}

const FCellInventary: React.FC<CellInventaryType> = ({
  droptHandler,
  dragStartHandler,
  data,
  handlerActiveInventary,
  dragActive,
}) => {
  const { hover, hoverRef } = useHoverHits();

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {};

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {};

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <div
        onDragStart={(e) => dragStartHandler(data)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => droptHandler(e, data)}
        draggable={true}
        className={styles.container}
      >
        <div
          onClick={() => handlerActiveInventary(data)}
          ref={hoverRef}
          className={
            data.status ? `${styles.imag} ${styles.active}` : styles.imag
          }
        >
          <img
            src={
              data.image
                ? data.image
                : "https://res.cloudinary.com/ds289tkqj/image/upload/v1672775443/Game/white_fswfrx.jpg"
            }
            alt="inventory image"
          />
        </div>
        {hover && data.name && !dragActive && (
          <div className={styles.hits}>
            <LayoutMiltyHits text={data.bonus} title={data.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export const CellInventary = React.memo(FCellInventary);
