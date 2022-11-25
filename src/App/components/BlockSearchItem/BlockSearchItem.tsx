import React from "react";

import styles from "./BlockSearchItem.module.scss";

interface IBlockSearchItem {
  children: React.ReactNode;
  height?: number;
  active: boolean;
}

const FBlockSearchItem: React.FC<IBlockSearchItem> = ({
  children,
  height,
  active,
}) => {
  const [activeState, setActive] = React.useState(false);

  React.useEffect(() => {
    if (active) {
      setActive(true);
    }
  }, []);

  return (
    <div
      className={activeState ? `${styles.root} ${styles.active}` : styles.root}
    >
      <div style={{ maxHeight: height }} className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export const BlockSearchItem = React.memo(FBlockSearchItem);
