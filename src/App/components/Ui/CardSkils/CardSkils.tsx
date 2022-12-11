import { icons } from 'data';
import { useToggle } from 'hooks';
import { SkillsType } from 'models';
import React from 'react';


import styles from './CardSkils.modules.scss';

interface CardSkilsType {
  data: SkillsType[]
  title: string
}


const CardSkils: React.FC<CardSkilsType> = ({data, title}) => {

  

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
        <ul>
        {data.map(item => (
          <div key={item.key} className={styles.container}>
          <a href={item.url} target={'_blank'}>
          <li  className={styles.item}>
            <p className={styles.text}>{item.key}:  {item.property}</p>
            <img className={styles.image} src={item.image} alt="item image" />
          </li>
          </a>
            <div className={styles.hits}>{item.text}</div>
          </div>
      
          ))}
        </ul>
      
    


      


    </div>
  );
};

export {CardSkils};