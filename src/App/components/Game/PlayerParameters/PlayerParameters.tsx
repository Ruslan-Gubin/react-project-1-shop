import React from 'react';

import styles from './PlayerParameters.module.scss';

interface PlayerParametersType {

}

const PlayerParameters: React.FC<PlayerParametersType> = () => {
  return (
    <div className={styles.root}>
Параметры в разработке
    </div>
  );
};

export {PlayerParameters};