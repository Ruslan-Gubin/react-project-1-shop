import React from 'react';
import { FooterGameChatMenu } from '../FooterGameChatMenu';
import { FooterGameClock } from '../FooterGameClock';

import styles from './FooterGameBar.module.scss';

interface FooterGameBarType {

}

const FooterGameBar:React.FC<FooterGameBarType> = () => {
  return (
    <div className={styles.root}>
    <FooterGameChatMenu />
    <FooterGameClock />
    </div>
  );
};

export {FooterGameBar};