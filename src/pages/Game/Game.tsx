import React from 'react';

import styles from './Game.module.scss';

const Game: React.FC = () => {
  
  return (
    <div className={styles.root}>
      <ul>
    <li style={{fontSize: 25, color: 'black'}}>
     <a href="https://lo9.lordfilm.lu/13121-film-pravda-ili-dejstvie-todd-2018.html" target={'_blank'}>Правда или действие</a>
    </li>
    <li style={{fontSize: 25, color: 'black'}}>
     <a href="https://lordserials.org/zarubezhnye/9007-kabinet-redkostej-gilermo-del-toro-2022.html" target={'_blank'}>Кабинет редкостей Гильермо дель Торо(Сериал)</a>
    </li>
    <li style={{fontSize: 25, color: 'black'}}>
     <a href="https://vg.mwfilm.ru/filmy/6941-umnica-uill-hanting-good-will-hunting-1997.html" target={'_blank'}>Умница Уилл Хантинг</a>
    </li>
    <li style={{fontSize: 25, color: 'black'}}>
     <a href="https://lo9.lordfilm.lu/9506-film-krutye-mery-2016.html" target={'_blank'}>Крутые меры (2016)</a>
    </li>

      </ul>
   
    </div>
  );
};

export {Game};