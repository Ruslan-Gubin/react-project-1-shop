import { useState } from "react";
import { useDispatch} from 'react-redux';
import { addTodo } from "../../store/todoSlice/todoSlice";

import InputField from "./InputField";
import TodosList from "./TodosList";



const Home = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="container">
<InputField  text={text}  handleInput={setText} 
handleSubmit={()=> {dispatch(addTodo({text})), setText('')}}/>           
        <TodosList />
        </div>
    );
};


export default Home;
