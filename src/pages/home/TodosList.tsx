import React from 'react';
import {useSelector} from 'react-redux'
import { selectTodos } from '../../store/slice';
import TodosItem from "./TodosItem";



const TodosList = React.memo(() => {
    const {todos} = useSelector(selectTodos)
    return (

        <ul>
            {
                todos.map(todo => <TodosItem
                     key={todo.id}
                      {...todo}
                      />)
                    }
                    
        </ul>
    );
});

export default TodosList;