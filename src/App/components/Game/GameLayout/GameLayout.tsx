import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { selectAuth, selectGameModal } from "store/slice";
import { FooterGame, AccordionModal, GameHeader, ModalGame, PlayerModalOptions } from "../";

import styles from "./GameLayout.module.scss";

const GameLayout: React.FC = () => {
  const {auth} = useSelector(selectAuth)
  const {data: playerData, isLoading, refetch} = playerApi.useGetPlayerQuery({id: auth._id})
  const {playerOptionsModal, modalStatus} = useSelector(selectGameModal)

  return ( 
    <div className={styles.root}>
      <div className={styles.header}>
        {playerData && !isLoading && refetch &&
      <GameHeader playerData={playerData} refetch={refetch} />
        }
      </div>
      <div className={styles.outlet}> 
      <Outlet />
      </div>

      <div className={styles.modal}>
      {modalStatus &&  playerData && !isLoading &&
      <ModalGame title={`${auth.fullName} - Уровень: ${0}`} >
      <AccordionModal links={playerOptionsModal}>
        <PlayerModalOptions playerData={playerData} refetch={refetch} />
      </AccordionModal>
      </ModalGame>
      }
      </div>

      <div className={styles.footer}> 
      <FooterGame />
      </div>
    </div>
  );
};

export { GameLayout };
