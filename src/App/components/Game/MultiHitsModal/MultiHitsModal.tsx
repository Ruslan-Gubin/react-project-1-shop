import  { useEffect, useState, FC } from "react";
import { dateGame } from "utils";

import styles from "./MultiHitsModal.module.scss";

interface MultiHitsModalType {
  title: string;
  text: string;
  width: number;
  capasity: number;
  totalCount: number;
  incom: number;
}

const MultiHitsModal: FC<MultiHitsModalType> = (props) => {
  const { capasity, incom, text, title, totalCount, width } = props;
  const [timeFullCapasity, setTimeFullCapasity] = useState(0);


    useEffect(() => {
      const needRes =  capasity - totalCount
      const needTime = Math.floor(((needRes / incom) * 60) * 1000)
      setTimeFullCapasity(needTime)
  }, []);

const needTimeForUpdate = dateGame.timeTransferMs(timeFullCapasity)

  return (
    <div style={{ width: width }} className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.text}>
          {totalCount !== capasity &&
          <>
          <span>{text}</span>
          <span>{dateGame.formatedTime(needTimeForUpdate).replace('00:', '')}m</span>
          {/* <span>{dateGame.formatedTime(needTimeForUpdate)}</span> */}
          </>
          }
        </div>
      </div>
    </div>
  );
};

export { MultiHitsModal };
