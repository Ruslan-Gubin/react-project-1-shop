import React from "react";
import { useHover } from "hooks";
import { ProgressGame } from "ui";
import { LayoutMiltyHits } from "../LayoutMiltyHits";

import styles from "./PlayerProgressBarItem.module.scss";

interface PlayerProgressBarItemType {
  title: string;
  text: string;
  icon: string | undefined;
  color: string;
  progress: number;
}

const PlayerProgressBarItem: React.FC<PlayerProgressBarItemType> = ({
  title,
  text,
  icon,
  color,
  progress,
}) => {
  const hoverRef = React.useRef(null);
  const hover = useHover(hoverRef);

  return (
    <div className={styles.root}>
      <div ref={hoverRef} className={styles.container}>
        {hover && (
          <div className={styles.hits}>
            <LayoutMiltyHits text={text} title={title} />
          </div>
        )}

        <div className={styles.icon}>
          <img src={icon} alt="icon player progress" />
        </div>

        <div className={styles.progress}>
          <ProgressGame progres={progress} color={color} />
        </div>
      </div>
    </div>
  );
};

export { PlayerProgressBarItem };
