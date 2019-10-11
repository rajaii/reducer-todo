import React, { useState, useReducer } from 'react';

import Todo from './Todo.js';
import { todoReducer, initialState } from '../reducers/reducer.js';
import { addTodo, removeTodo, toggleTodo } from '../actions/actions.js';

function TodoList () {

 const [ todoList, dispatch ] = useReducer(todoReducer, initialState);
 const [ newTodoItem, setNewTodoItem ] = useState({
     todoItem: '',
     isCompleted: false,
     id: todoList.length
    });

    const handleChange = e => {
        setNewTodoItem({
            [e.target.name]: e.target.value,
            id: todoList.todo.length,
            isCompleted: false,
        })
    }

    const addNewTodo = e => {
        e.preventDefault();
        dispatch(addTodo(newTodoItem));
        console.log(todoList)
        setNewTodoItem({
            todoItem: '',
            isCompleted: false,
            id: todoList.length
        })
    }

    const handleToggle = t => {
        dispatch(toggleTodo(t))
    }

    const clearCompleted = ts => {
        dispatch(removeTodo(ts));
    }

    return (
        <div>
            {todoList.todo.map(t => {
                return <Todo key={t.id} handleToggle={handleToggle} todoList={todoList} todo={t} />
            })}
          
            <form type='submit' onSubmit={addNewTodo}>
                <input 
                type='text'
                value={newTodoItem.todoItem}
                name='todoItem'
                placeholder='Add todo task'
                onChange={handleChange}
                />
                <button>add todo</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed Todos</button>
        </div>
    )
}

export default TodoList;