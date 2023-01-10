import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { playerApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { ButtonMain, InputMain } from "ui";

import styles from "./RegisterGame.module.scss";

interface RegisterGameType {}

const RegisterGame: React.FC<RegisterGameType> = () => {
  const { auth } = useSelector(selectAuth);
  const [createPlayer] = playerApi.useCreatePlayerMutation();
  const [newSity, setNewSity] = React.useState<string>("");
  const navigate = useNavigate();

  const handlerCreatePlayer = async () => {
    try {
      await createPlayer({ nameSity: newSity, userId: auth._id })
        .unwrap()
        .then(() => {
          navigate("/game");
        });
    } catch (error) {
      console.error("rejected", error);
    }
  };

  const handlerCancel = () => {
    navigate('/')
  }



  return (
    <div className={styles.root}>
      <div className={styles.header}>Введите название Города</div>
      <div className={styles.body}>
        <InputMain
          minLength={3}
          autofocus={true}
          value={newSity}
          onChange={(value) => setNewSity(String(value))}
        />

        <div className={styles.button}>
          {newSity.length > 2 && newSity.length < 20 ? (
            <ButtonMain
              width={150}
              bgColor="info"
              onClick={() => handlerCreatePlayer()}
            >
              START
            </ButtonMain>
          ) : (
            <ButtonMain width={150} bgColor="black">
              START
            </ButtonMain>
          )}
          <div className={styles.cancel}>
          <ButtonMain
              width={150}
              bgColor="red"
              onClick={() => handlerCancel()}
              >
              CANCEL
            </ButtonMain>
              </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export { RegisterGame };
