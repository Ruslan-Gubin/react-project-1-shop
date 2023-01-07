import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { gameModalAction, selectAuth } from "store/slice";
import { useHoverHits } from "hooks";
import { HitsModal } from "../HitsModal";

import styles from "./HeroAvatar.module.scss";

interface HeroAvatarType {}

const HeroAvatar: React.FC<HeroAvatarType> = () => {
  const { auth } = useSelector(selectAuth);
  const { data: playerData } = playerApi.useGetPlayerQuery({ id: auth._id });
  const { hover, hoverRef } = useHoverHits();
  const dispatch = useDispatch();

  const handlerClickAvatar = () => {
    dispatch(gameModalAction.setModalActive({ value: "Инвентарь" }));
  };

  return (
    <div onClick={() => handlerClickAvatar()} className={styles.root}>
      <div ref={hoverRef} className={styles.container}>
        <img src={playerData?.user.image.url} alt="image player" />
        {hover && (
          <div className={styles.hits}>
            <HitsModal width={120} value={"Твой герой"} />
          </div>
        )}
      </div>
    </div>
  );
};

export { HeroAvatar };
