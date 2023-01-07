import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerApi } from 'store/rtkQuery';
import { gameModalAction, playerAction, selectAuth } from 'store/slice';
import { ButtonMain, InputMain } from 'ui';

import styles from './Game.module.scss';

const Game: React.FC = () => {
  const { auth } = useSelector(selectAuth); 
  const [createPlayer] = playerApi.useCreatePlayerMutation();
  const [removePlayer] = playerApi.useRemovePlayerMutation();
  const [updatePlayer] = playerApi.useUpdatePlayerMutation();
  const [text, setText] = React.useState('')
  const dispatch = useDispatch()

  const handlerCreatePlayer = async () => {
    try {
      await createPlayer({ nameSity: text, userId: auth._id }).unwrap()
      // .then((data) => dispatch(playerAction.setPlayer(data))) 
    } catch (error) {
      console.error('rejected', error)
    }

  };

  const handlerRemovePlayer = async () => {
    try{
       await removePlayer({userId: auth._id}).unwrap()
    } catch (error){
      console.error('rejected', error)
    }
  };

  const handlerUpdatePlayer = async () => {
    try{
       await updatePlayer({text: text, userId: auth._id}).unwrap() 
      //  .then((data) => dispatch(playerAction.setPlayer(data)))
    } catch (error){
      console.error('rejected', error)
    }
  };

  return (
    <div className={styles.root}>
      <ButtonMain
      width={100}
      bgColor="black"
      onClick={() => dispatch(gameModalAction.linkOptionsActive())}
      >
        dispatch
      </ButtonMain>
      <ButtonMain
      width={100}
      bgColor="info"
      onClick={() => handlerCreatePlayer()}
      >
        Create Sity
      </ButtonMain>
      <ButtonMain
      width={100}
      bgColor="red"
      onClick={() => handlerRemovePlayer()}
      >
        Remove Sity
      </ButtonMain>
      <ButtonMain
      width={100}
      bgColor="orange"
      onClick={() => handlerUpdatePlayer()}
      >
        Update Sity
      </ButtonMain>

<InputMain  value={text} onChange={(value) => setText(value)} placeholder={'Введите название Города'}/>

</div>
);
};

export {Game};