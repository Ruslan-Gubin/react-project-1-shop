import React from 'react';

import styles from './ProgressBar.module.scss';

interface IProgressBar{
  value: number
  total: number
  height?: number 
  width?: number
}

const ProgressBar: React.FC<IProgressBar> = ({value, total, height, width}) => {
  const [progres, setProgres] = React.useState<number>(value)
  
  React.useEffect(() => {
    setProgres(Math.round((value)/(total ) * 100))
  },[value])
  
  return (
    <div style={{width: width}} className={styles.root}>
        <div style={{height: height}} className={styles.container}>
          <div className={styles.complete} style={{width: `${progres}%`}}>
            <div className={styles.liquid}></div>
          </div>
          {/* <span className={styles.progress}>{progres}%</span> */}
        </div>
      </div>
  );
};

export  {ProgressBar};