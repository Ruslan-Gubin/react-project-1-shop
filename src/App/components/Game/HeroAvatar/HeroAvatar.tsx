import React from 'react';
import { useSelector } from 'react-redux';
import { playerApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';


import styles from './HeroAvatar.module.scss';

interface HeroAvatarType {

}

const HeroAvatar: React.FC<HeroAvatarType> = () => {
  const {auth} = useSelector(selectAuth)
const {data: playerData} = playerApi.useGetPlayerQuery({id: auth._id})

console.log(playerData);

  return (
    <div className={styles.root}>
     <div className={styles.container}>
     <img src={playerData?.user.image.url} alt="image player" />
     </div>
    </div>
  );
};

export {HeroAvatar};