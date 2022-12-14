import { CircleBuild } from 'game';
import React from 'react';

import styles from './Game.module.scss';

const Game: React.FC = () => {
  const [active, setActive] = React.useState(false)
  
  return (
    <div className={styles.root}>
      <button onClick={() => setActive(!active)}>push</button>
      <CircleBuild active={active}/>

    </div>
  );
};

export {Game};



{/* <h1>Резюмэ</h1>
  <p>вся информация внятно подана на одной странице</p>
  <p>чтобы все самое главное было в верхней части станицы  перед лицом</p>
  <p> Важное - это контакты</p>
  <p>Стек </p>
  <p>Фото</p>
  <p>Кусочек о себе</p>
  <p></p> */}