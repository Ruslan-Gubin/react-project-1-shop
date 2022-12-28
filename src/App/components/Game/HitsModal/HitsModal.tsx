import React from 'react';

import styles from './HitsModal.module.scss';

interface HitsModalType {
  value: string
  width?: number
}

const HitsModal:React.FC<HitsModalType> = ({value, width}) => {

  return (
<div style={{width: width}}  className={styles.root}>
<div className={styles.container}>
<span>{value}</span>  
</div>
</div>
      );
};

export {HitsModal};