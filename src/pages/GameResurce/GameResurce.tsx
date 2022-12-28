import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { MinesBlock, ResurceInfo } from "game";
import { mineUpdateObjOptions, resurceUpdateRuls } from "data";
import { MineType } from "models/GameType";
import { playerAction, selectAuth, selectPlayer } from "store/slice";
import { findNextLevelResurce } from "utils";

import styles from "./GameResurce.module.scss";
import { ButtonMain } from "ui";

const GameResurce: React.FC = () => {
  const { auth } = useSelector(selectAuth);
  const { nextLevelMinesUpdate, resurceBar } = useSelector(selectPlayer);
  const {
    data: playerData,
    isLoading
  } = playerApi.useGetPlayerQuery({ id: auth._id });
  const [updateMineLevel, {}] = playerApi.useUpdateLevelMineMutation();
  const [updateFull, {}] = playerApi.useUpdateLevelMineFullMutation();
  const dispatch = useDispatch();


  const handlerIronValue = (value: MineType | null) => {
    if (value) {
      const resource = value.resorse;
      const level = value.level;

      dispatch(playerAction.setLastMinesInfo(value));
      const resurceNeedUpdate = findNextLevelResurce(
        resurceUpdateRuls,
        resource,
        level + 1
      );
      dispatch(playerAction.setNextLevelMineUpdate(resurceNeedUpdate));
    }
  };

  const handlerClickCircle = async (value: MineType) => {
      const timeUpdate = nextLevelMinesUpdate.time
      if (!isLoading && playerData) {
      const { mimeUpdatedOptions, resurceBarCount } = mineUpdateObjOptions(
        value,
        playerData,
        resurceBar,
        nextLevelMinesUpdate
        );
        
        dispatch(playerAction.setResurceBarAll(resurceBarCount));
        dispatch(playerAction.setMineUpdateActive({mineId: value._id, timeUpdateValue: timeUpdate}));
        
        await updateMineLevel(mimeUpdatedOptions)
        .unwrap()
        .then(async () => {
        })
        .catch((error) => console.log(error));
      }
  };

  const handlerAddResource = async () => {
    await updateFull("");
  };

  return (
    <div className={styles.root}>
       {/* <ButtonMain
        onClick={() => handlerAddResource()}
        width={100}
        bgColor="black"
      >
        full
      </ButtonMain> */}

      <ResurceInfo />
      {playerData && (
        <MinesBlock
          playerData={playerData}
          handlerClickCircle={handlerClickCircle}
          handlerIronValue={handlerIronValue}
        />
      )}
    </div>
  );
};

export { GameResurce };
