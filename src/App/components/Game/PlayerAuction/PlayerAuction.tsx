import React from 'react';

import styles from './PlayerAuction.module.scss';

interface PlayerAuctionType {

}

const PlayerAuction: React.FC<PlayerAuctionType> = () => {
  return (
    <div className={styles.root}>
 Аукцион в разработке
    </div>
  );
};

export {PlayerAuction};