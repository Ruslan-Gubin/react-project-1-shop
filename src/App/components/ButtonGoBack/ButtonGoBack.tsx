import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropsClildren } from "../../../models/children";

const ButtonGoBack = ({ ...props }: PropsClildren) => {
    const [text, setText] = useState('Вернуться назад')

  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  
  return (  
    <button className={props.class || 'btn-back'} onClick={goBack} >
     {props.text || text}     
    </button>  
  );
};

export default ButtonGoBack;
