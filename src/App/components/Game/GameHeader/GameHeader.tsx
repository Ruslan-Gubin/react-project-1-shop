import { iconsGame } from 'data';
import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceBar } from '../ResourceBar';

import styles from './GameHeader.module.scss';

const GameHeader: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.start}>

      </div>


<div className={styles.center}>
<Link to={'/game/resurce'}>
        <img className={styles.resurceLink} src={iconsGame.resurceLink} alt="resurce link" />
      </Link>
      <ResourceBar /> 
<Link to={'/game'}>
      <div className={styles.settlementLink}>
        <img  src={iconsGame.settlement} alt="resurce link" />
      </div>
      </Link>
</div>

      <div className={styles.options}>

<Link to={'/'}>
        <img className={styles.exit} src={iconsGame.exit} alt="resurce link" />
      </Link>
      </div>
      
    </div>
  );
};

export  {GameHeader};