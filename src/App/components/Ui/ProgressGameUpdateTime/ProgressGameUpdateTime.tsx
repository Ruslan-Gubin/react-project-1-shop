import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerApi } from 'store/rtkQuery';
import { playerAction, selectAuth, selectPlayer } from 'store/slice';
import { dateGame } from 'utils';

import styles from './ProgressGameUpdateTime.modules.scss';



const ProgressGameUpdateTime: React.FC = ({}) => {
  const { auth } = useSelector(selectAuth);
  const {refetch} = playerApi.useGetPlayerQuery({ id: auth._id });
  const {mineUpdateActive} = useSelector(selectPlayer)
  const [timeLeftUpdate, setTimeLeftUpdate] = React.useState('00:00:00')
  const [progress, setProgress] = React.useState(Math.floor(((Date.now() - mineUpdateActive.timeStartUpdate) / mineUpdateActive.timeUpdate) * 100))
  const dispatch = useDispatch()

  React.useEffect(() => { 
    if (timeLeftUpdate === '23:59:58') {
      setTimeLeftUpdate('00:00:00')
    }
    if (timeLeftUpdate === '23:59:59') {
      setTimeLeftUpdate('00:00:00')
    }
    const nowDate = Date.now()
    if (nowDate > mineUpdateActive.timeEndUpdate  + 3000) {
      dispatch(playerAction.mineCancelUpdateActive())
      refetch()
    } 

    const timePassed = nowDate - mineUpdateActive.timeStartUpdate
    const tick = () => {
      setProgress(Math.floor((timePassed / mineUpdateActive.timeUpdate) * 100))
      
      setTimeLeftUpdate(dateGame.vievDate(mineUpdateActive.timeEndUpdate - nowDate))
    }
    const timer =  setInterval(tick,1000)
    return () => clearInterval(timer)
  },[timeLeftUpdate])
  
  

  return (
    <div className={styles.progressRoot}>
      <div className={styles.progressContainer}>
      <div className={styles.progressCompleted} style={{width: `${progress}%`}}>
        
        <div className={styles.countTime}>
          <span>
          {timeLeftUpdate}
          </span>
          </div>
      </div>
      </div>
      </div>
  );
};

export  {ProgressGameUpdateTime};