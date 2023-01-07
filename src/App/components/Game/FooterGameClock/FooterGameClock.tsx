import { iconsGame } from 'data';
import React, { useEffect } from 'react';
import { dateGame } from 'utils';

import styles from './FooterGameClock.module.scss';

interface FooterGameClockType {

}

const FooterGameClock: React.FC<FooterGameClockType> = React.memo(() => {
  const [time, setTime] = React.useState('')

  useEffect(() => {
    const nowData = Date.now()
    const tick = () => setTime(dateGame.formatedTime(nowData))
    const timer = setInterval(tick,1000)

    return () => {
      clearInterval(timer)
    } 
  },[time])

  return (
    <div className={styles.root}>
 <img src={iconsGame['clock']} alt="icon clock" />
 <span>{time}</span>
    </div>
  );
});

export {FooterGameClock};