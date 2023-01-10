import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { MinesBlock } from "game";
import { mineUpdateObjOptions, resourceUpdateRuls } from "data";
import { MineType } from "models/GameType";
import { playerAction, selectAuth, selectPlayer } from "store/slice";
import { findNextLevelResource } from "utils";

import styles from "./GameResource.module.scss";

const GameResource: React.FC = () => {
  const { auth } = useSelector(selectAuth);
  const { nextLevelMinesUpdate, resourceBar } = useSelector(selectPlayer);
  const { data: playerData, isLoading } = playerApi.useGetPlayerQuery({
    id: auth._id,
  });
  const [updateMineLevel, {}] = playerApi.useUpdateLevelMineMutation();
  const dispatch = useDispatch();

  const handlerIronValue = React.useCallback((value: MineType | null) => {
    if (value) {
      const resource = value.resorse;
      const level = value.level;

      dispatch(playerAction.setLastMinesInfo(value));
      const resurceNeedUpdate = findNextLevelResource(
        resourceUpdateRuls,
        resource,
        level + 1
      );
      dispatch(playerAction.setNextLevelMineUpdate(resurceNeedUpdate));
    }
  }, []);

  const handlerClickCircle = async (value: MineType) => {
    const timeUpdate = nextLevelMinesUpdate.time;
    if (!isLoading && playerData) {
      const { mineUpdatedOptions, resourceBarCount } = mineUpdateObjOptions(
        value,
        playerData,
        resourceBar,
        nextLevelMinesUpdate
      );

      dispatch(playerAction.setResourceBarAll(resourceBarCount));
      dispatch(
        playerAction.setMineUpdateActive({
          mineId: value._id,
          timeUpdateValue: timeUpdate,
        })
      );

      await updateMineLevel(mineUpdatedOptions)
        .unwrap()
        .then(async () => {})
        .catch((error) => console.log(error)); 
    }
  };

  return (
    <div className={styles.root}>
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

export { GameResource };
