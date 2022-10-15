import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './ButtonGoBack.module.scss';

interface PropsClildren  {
  children?: JSX.Element | JSX.Element[];
  text?: string
  className?: string 
};

const ButtonGoBack: React.FC<PropsClildren> = React.memo(({children, ...props }) => {

  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  
  return (  
    <button className={props.className || styles.button} onClick={goBack} >
     {props.text || 'Вернуться назад'}  
     {children}   
    </button>  
  );
});

export  {ButtonGoBack};
