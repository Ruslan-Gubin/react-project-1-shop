import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropsClildren } from "../../../../models/children";
import styles from './ButtonGoBack.module.scss';

const ButtonGoBack = ({children, ...props }: PropsClildren) => {
    const [text, setText] = useState('Вернуться назад')

  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  
  return (  
    <button className={props.class || styles.button} onClick={goBack} >
     {props.text || text}  
     {children}   
    </button>  
  );
};

export  {ButtonGoBack};
