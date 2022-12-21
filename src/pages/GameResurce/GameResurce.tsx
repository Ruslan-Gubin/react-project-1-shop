import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { MinesBlock, ResurceInfo } from "game";
import {  resurceUpdateRuls } from "data";
import {  MineType } from "models/GameType";
import { playerAction,  selectAuth,  selectPlayer } from "store/slice";
import { calculateResurceBarUpdate, findNextLevelResurce } from "utils";

import styles from "./GameResurce.module.scss";
import { ButtonMain } from "ui";

const GameResurce: React.FC = () => {
  const {auth} = useSelector(selectAuth)
  const { nextLevelMinesUpdate, player, resurceBar} = useSelector(selectPlayer);
  const {data: playerData} = playerApi.useGetPlayerQuery({id: auth._id}) 
  const [updateMineLevel,{}] = playerApi.useUpdateLevelMineMutation()
  const [updateFull,{}] = playerApi.useUpdateLevelMineFullMutation()
  const dispatch = useDispatch()


  const handlerIronValue = (value: MineType | null) => {
    if (value) {
      const resource = value.resorse;
      const level = value.level;
      
      dispatch(playerAction.setLastMinesInfo(value))
      const resurceNeedUpdate = findNextLevelResurce( resurceUpdateRuls, resource, level + 1 );
      dispatch(playerAction.setNextLevelMineUpdate(resurceNeedUpdate))
      }
    };
    
 
  const handlerClickCircle = async(value: MineType) => {
    console.log(value)
    if (playerData) {
    const resurceBarCount = {
        wood: resurceBar.wood - nextLevelMinesUpdate.wood,
        clay: resurceBar.clay - nextLevelMinesUpdate.clay,
        iron: resurceBar.iron - nextLevelMinesUpdate.iron,
        wheat: resurceBar.wheat - nextLevelMinesUpdate.wheat
      }
      const mimeUpdatedOptions = {
        level: nextLevelMinesUpdate.level,
        income: nextLevelMinesUpdate.income,
        piple: nextLevelMinesUpdate.piple,
        time: nextLevelMinesUpdate.time,
        population: nextLevelMinesUpdate.piple - value.piple,
        resurce: value.resorse,
        incrementIncome: nextLevelMinesUpdate.income - value.income,
        playerId: player._id,
        idMine: value._id,
        resurceBar: resurceBarCount,
        resurceBarAfterUpdate: {
          wood: calculateResurceBarUpdate(resurceBarCount.wood, playerData.income.wood, nextLevelMinesUpdate.time, playerData.capasity.wood),
          clay: calculateResurceBarUpdate(resurceBarCount.clay, playerData.income.clay, nextLevelMinesUpdate.time, playerData.capasity.clay),
          iron: calculateResurceBarUpdate(resurceBarCount.iron, playerData.income.iron, nextLevelMinesUpdate.time, playerData.capasity.iron),
          wheat: calculateResurceBarUpdate(resurceBarCount.wheat, playerData.income.wheat, nextLevelMinesUpdate.time, playerData.capasity.wheat) 
        }
      }
      
      await updateMineLevel(mimeUpdatedOptions).unwrap()
      .then((data) => {
        //@ts-ignore
        const resourceBar = data.resourceBar
        dispatch(playerAction.setResurceBarAll(resourceBar))
        
        
      })
      .catch(error => console.log(error))
    }
    };
    
    const handlerAddResource = async () => {
      await updateFull('')
    }
    
    return (
      <div className={styles.root}>
      <ButtonMain onClick={() => handlerAddResource()} width={200} bgColor="black">full</ButtonMain> 
        <ResurceInfo />

        <MinesBlock
          handlerClickCircle={handlerClickCircle}
          handlerIronValue={handlerIronValue}
        />
    
    </div>
  );
};

export { GameResurce };
