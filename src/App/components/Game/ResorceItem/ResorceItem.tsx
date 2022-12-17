
import React from 'react';

import styles from './ResorceItem.module.scss';

interface ResorceItemType {
  line: boolean
  icons: string
  value: {
    count: number
    total: number
    incom: number
  }
} 


const ResorceItem: React.FC<ResorceItemType> = ({line, icons, value}) => {
  const [progres, setProgres] = React.useState(0)
  
  
  React.useEffect(() => {
    setProgres(Math.round((value.count)/(value.total ) * 100))
  },[])

  return (
    <div className={line ? `${styles.root} ${styles.beforLine}` : styles.root}>
      <div className={styles.header}>
      <img className={styles.icon} src={icons} alt="icon resource" />
      <div className={styles.values}>
      <span className={styles.countValue}>{value.count}</span>
      <span className={styles.totalValue}>/{value.total}</span>
      </div>
      </div>

      <div className={styles.progressRoot}>
      <div className={styles.progressContainer}>
      <div className={styles.progressCompleted} style={{width: `${progres}%`}}>
      </div>
      </div>
      </div>

      <div className={styles.incomConta}>
        <span>+{value.incom}</span>
        
      </div>

    </div>
  );
};

export  {ResorceItem};