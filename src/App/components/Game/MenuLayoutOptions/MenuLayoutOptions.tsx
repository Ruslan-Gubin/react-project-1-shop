import { iconsGame } from 'data';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuLayoutOptionsItem } from '../';

import styles from './MenuLayoutOptions.module.scss';

interface MenuLayoutOptionsType {

}

const MenuLayoutOptions:React.FC<MenuLayoutOptionsType> = () => {
  const [iconSoundActive, setIconSoundActive] = React.useState(true)
const navigate = useNavigate()

  const handlerSoundActive = () => {
    setIconSoundActive((prev) => !prev)
  }

  const handlerOutGame = () => {
    navigate('/')
  }

  return (
    <div className={styles.root}>
      <MenuLayoutOptionsItem onClick={() => handlerSoundActive()} icon={iconSoundActive ? iconsGame['soundOn'] :  iconsGame['soundNone']} text='Отключить звук'/>
      <MenuLayoutOptionsItem onClick={() => {}} icon={iconsGame['questions']} text='Помощь'/>
      <MenuLayoutOptionsItem onClick={() => {}} icon={iconsGame['optionsWhite']} text='Настройки'/>
      <MenuLayoutOptionsItem onClick={() => {}} icon={iconsGame['userMobile']} text='Открыть свой профиль'/>
      <MenuLayoutOptionsItem onClick={() => handlerOutGame()} icon={iconsGame['exit']} text='Выйти'/>
    </div>
  );
};

export  {MenuLayoutOptions};