import { iconsGame } from "data";
import { useHoverHits } from "hooks";
import React from "react";
import { useDispatch } from "react-redux";
import { gameModalAction } from "store/slice";
import { HeroAvatar } from "../HeroAvatar";
import { HitsModal } from "../HitsModal";

import styles from "./HeroInfo.module.scss";

interface HeroInfoType {}

const HeroInfo: React.FC<HeroInfoType> = () => {
  const playerLevel = 1;
  const {hover:hoverCompass, hoverRef: hoverRefCompass} = useHoverHits()
  const {hover:parametersHover, hoverRef: parametersRef} = useHoverHits()
  const dispatch = useDispatch()

  const handleActiveModalDiscovery = () => {
    dispatch(gameModalAction.setModalActive({value: 'Приключение'}))
  }

  const handleActiveModalParameters =() => {
    dispatch(gameModalAction.setModalActive({value: 'Параметры'}))
  }

  return (
    <div className={styles.root}>
      <div   className={styles.container}>
        <div className={styles.link}>
          <div ref={hoverRefCompass} className={styles.itemContainer}>
            <img
            onClick={() => handleActiveModalDiscovery()}
              className={styles.item}
              src={iconsGame["compass"]}
              alt="Icon compass"
            />
          </div>
        </div>
            {hoverCompass && 
            <div className={styles.compassHits}>
            <HitsModal width={150} value={'Приключение'}/>
            </div>
            }

        <HeroAvatar />

        <div
        ref={parametersRef}
          className={`${styles.link} ${styles.reverseBlock}`}
          style={{ borderBottomLeftRadius: 0 }}
        >
          <div
          onClick={() => handleActiveModalParameters()}
          className={styles.itemContainer}>
            <span>Ур</span>
            <span>{playerLevel}</span>
          </div>
        </div>
        {parametersHover && 
            <div className={styles.compassHits}>
            <HitsModal width={150} value={'Параметры'}/>
            </div>
            }
      </div>
    </div>
  );
};

export { HeroInfo };
