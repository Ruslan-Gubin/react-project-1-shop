import { useDispatch} from 'react-redux';
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice/todoSlice";

const TodosItem = ({id, completed, text}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => {dispatch(toggleTodoComplete({id}))}} />
            <span style={{fontSize: 25, color: 'white'}}>{text}</span>
            <span onClick={()=> {dispatch(removeTodo({id}))}} style={{color: 'red',cursor: 'pointer'}}>&times;</span>
            </li>
            )    
};

export default TodosItem;