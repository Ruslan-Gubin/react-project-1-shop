import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MultiplaySelect } from "../../App/components/CustomSelect";
import Test from "../../App/components/Test";
import { ButtonMain, InputMain } from "../../App/components/Ui";
import { useMatchMedia, useToggle } from "../../hooks";
import { addTodo } from "../../store/todoSlice/todoSlice";
import { formatter } from "../../utils/intl-Number-Format";
import { RUDate } from "../../utils/intlDateTimeFormat";

import InputField from "./InputField";
import TodosList from "./TodosList";

const Home = React.memo(() => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [date, setDate] = useState(RUDate.format(new Date()));
    const [isVisible, toggleVisible] = useToggle(false)
  const enterRef = React.useRef()

  const handlerKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {    
        dispatch(addTodo({ text })), setText("");
    }
  }
  

  return (
    <div>
    {!isVisible ?
    <ButtonMain onClick={()=> toggleVisible(true)}> Show Todo</ButtonMain>  
    :
    <ButtonMain onClick={()=> toggleVisible(false)}> Hide Todo</ButtonMain>
    }

      {isMobile && <ButtonMain bgColor="green">Это Мобилка</ButtonMain>}
      {isTablet && <ButtonMain bgColor="info">Это Планшет</ButtonMain>}
      {isDesktop && <ButtonMain bgColor="orange">Это Desktop</ButtonMain>}
      <InputMain  value={text} setValue={setText} onKeyDown={handlerKeyDown}/>
      <ButtonMain
        onClick={() => {
            dispatch(addTodo({ text })), setText("");
        }}
        bgColor="black"
        >
        Push
      </ButtonMain>
        {isVisible && 
<>
      <TodosList />
      <MultiplaySelect />
      <Test />
</>
    }

      {formatter.format(100)}
      {formatter.format(101)}
      {formatter.format(102)}
      {formatter.format(105)}
      {formatter.format(108)}
      {formatter.format(111)}
    </div>
  );
});

export { Home };
