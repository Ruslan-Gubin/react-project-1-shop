import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeRootState } from '../../store';

interface Itodos {
    id: number | string
    completed: boolean
    text: string
}

const todoSlice = createSlice ({
    name: 'todos',
    initialState: {
        todos:<Itodos[]> [],
    },
    reducers: {
        addTodo(state, action: PayloadAction<{text: string}>) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },

        removeTodo(state, action: PayloadAction<{id:string|number}>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },

        toggleTodoComplete(state, action: PayloadAction<{id:string|number}>) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed
            }
        },
    }
})

export const selectTodos = (state: TypeRootState) => state.todos;

export const todoAction = todoSlice.actions;

export const todoReducer = todoSlice.reducer