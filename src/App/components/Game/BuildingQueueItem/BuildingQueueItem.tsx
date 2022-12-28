import { useHover } from "hooks";
import React, { useRef } from "react";
import { LayoutMiltyHits } from "../LayoutMiltyHits";

import styles from "./BuildingQueueItem.module.scss";

interface BuildingQueueItemType {
  icons: string | undefined;
  title: string;
  text: string;
}

const BuildingQueueItem: React.FC<BuildingQueueItemType> = ({
  icons,
  title,
  text,
}) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const hover = useHover(hoverRef);

  return (
    <>
      <div ref={hoverRef} className={styles.container}>
        <div className={styles.item}>
          <img src={icons} alt="Icon scales" />
        </div>
      </div>

      {hover && (
        <div className={styles.hits}>
<LayoutMiltyHits  title={title} text={text}/>
        </div>
      )}
    </>
  );
};

export { BuildingQueueItem };
