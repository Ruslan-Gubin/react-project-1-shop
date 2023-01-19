import { AsyncTesting } from '../../App/components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { playerApi } from 'store/rtkQuery';
import { selectAuth } from 'store/slice';


import styles from './Game.module.scss';

const Game: React.FC = () => {
  const {auth} = useSelector(selectAuth)
  const {data: playerData, isLoading} = playerApi.useGetPlayerQuery({id: auth._id})
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isLoading && !playerData) {
      navigate('register')
    }
    if (!auth.fullName) {
      navigate('/login')
    }
  },[playerData, isLoading, auth])


  return (
    <div className={styles.root} data-testid='game-page'>
   <AsyncTesting />
</div>
);
};

export {Game};