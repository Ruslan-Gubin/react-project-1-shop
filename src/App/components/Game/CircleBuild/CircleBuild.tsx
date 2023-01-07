import { MineType } from 'models/GameType';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayer } from 'store/slice';

import styles from './CircleBuild.module.scss';

interface ICircleBuild {
  level: number
  handlerClickCircle?: (value: MineType) => void
  mine?: MineType
  updateActive: boolean
}


const CircleBuild: React.FC<ICircleBuild> = React.memo(({ updateActive, level, handlerClickCircle, mine}) => {
  const { mineUpdateActive } = useSelector(selectPlayer)
  

  return (
    <div className={styles.container}>
      {mine && handlerClickCircle && updateActive  ? 
      <div onClick={()=> !mineUpdateActive.status && handlerClickCircle(mine)} className={`${styles.rootActive} ${styles.root}`}> 
      <div className={`${styles.CircleContainerActive} ${styles.CircleContainer}`}>
      <div className={styles.CircleValue}>
      {level}
      </div>
      </div>
      </div>
    :  
    <div  className={styles.root}> 
      <div className={styles.CircleContainer}>
      <div className={styles.CircleValue}>
      {level}
    {mineUpdateActive.status}
      </div>
      </div>
      </div>
    
    }

    </div>
      
     
    
  );
});

export {CircleBuild};