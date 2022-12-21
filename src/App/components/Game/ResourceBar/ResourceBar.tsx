import React from 'react';
import { useSelector } from 'react-redux';
import { playerApi } from 'store/rtkQuery';
import {  selectAuth } from 'store/slice';
import { ResorceItem } from '../ResorceItem';

import styles from './ResourceBar.module.scss';

const ResourceBar: React.FC = () => {
  const { auth } = useSelector(selectAuth);
  const { data: playerData, isLoading: playerLoading } = playerApi.useGetPlayerQuery({ id: auth._id });
  const updatePlayer: number = playerData ? Date.parse(playerData.updatedAt) : 0
  

  return (
    <div className={styles.root}>
    {playerData && !playerLoading &&
    <>
      <ResorceItem  updateTime={updatePlayer} lastCount={playerData.resourceBar.wood} incom={playerData.income.wood} capasity={playerData.capasity.wood} name={'wood'}/>
      <ResorceItem updateTime={updatePlayer} lastCount={playerData.resourceBar.clay} incom={playerData.income.clay} capasity={playerData.capasity.clay} name={'clay'}/>
      <ResorceItem updateTime={updatePlayer} lastCount={playerData.resourceBar.iron} incom={playerData.income.iron} capasity={playerData.capasity.iron} name={'iron'}/>
      <ResorceItem updateTime={updatePlayer} lastCount={playerData.resourceBar.wheat} incom={playerData.income.wheat} capasity={playerData.capasity.wheat} name={'wheat'}/>
    </>
    }
    </div>
  );
};

export  {ResourceBar};