import {  useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { MultiplaySelect } from "../../App/components/CustomSelect";
import List from "../../App/components/List";

import Test from "../../App/components/Test";
import ButtonMain from "../../App/components/Ui/ButtonMain";
import { useMatchMedia } from "../../hooks";
import { addTodo } from "../../store/todoSlice/todoSlice";
import { formatter } from "../../utils/intl-Number-Format";
import { RUDate } from "../../utils/intlDateTimeFormat";


import InputField from "./InputField";
import TodosList from "./TodosList";


const Home = () => {
    const {isMobile,isTablet, isDesktop} = useMatchMedia()
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const [date, setDate] = useState(RUDate.format(new Date()))

    // useEffect(() =>  {
    // setTimeout(() => setDate(RUDate.format(new Date)),1000)
    // },[date])
   
    return (
        <div className="container">
            {/* <ButtonMain bgColor="black">{date}</ButtonMain> */}
            
            {isMobile && <ButtonMain bgColor="green">Это Мобилка</ButtonMain>}
            {isTablet && <ButtonMain bgColor="info">Это Планшет</ButtonMain>}
            {isDesktop && <ButtonMain bgColor="orange">Это Desktop</ButtonMain>}
<InputField  text={text}  handleInput={setText} 
handleSubmit={()=> {dispatch(addTodo({text})), setText('')}}/>           
        <TodosList />
        <MultiplaySelect />
        {formatter.format(100)}
        {formatter.format(101)}
        {formatter.format(102)}
        {formatter.format(105)}
        {formatter.format(108)}
        {formatter.format(111)}
        {/* <List /> */}
        <Test />
        </div>
    );
};


export  {Home};
