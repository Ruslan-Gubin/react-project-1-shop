import { iconsGame } from "data";
import React from "react";

import styles from "./AdventuresCard.module.scss";

interface AdventuresCardType {
  title: string;
  handleCardActive: (value: { numberCard: number; title: string }) => void;
  numberActive: number;
  numberCard: number;
}

const AdventuresCard: React.FC<AdventuresCardType> = ({
  title,
  handleCardActive,
  numberCard,
  numberActive,
}) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(() => {
      if (numberCard === numberActive) {
        return true;
      } else {
        return false;
      }
    });
  }, [handleCardActive]);

  return (
    <div
      onClick={() => handleCardActive({ numberCard, title })}
      className={styles.adventuresCard}
    >
      <div
        className={
          active
            ? `${styles.active} ${styles.adventuresCardContainer}`
            : styles.adventuresCardContainer
        }
      >
        <div className={styles.adventuresCardTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.adventuresCardTitleLine}></div>
        <div className={styles.image}>
          {numberCard === 2 ? (
            <img
              style={{ height: 65, width: 65 }}
              src={iconsGame["compassAdventure"]}
              alt="icon compassAdventure"
            />
          ) : (
            <img
              src={iconsGame["compassAdventure"]}
              alt="icon compassAdventure"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { AdventuresCard };
