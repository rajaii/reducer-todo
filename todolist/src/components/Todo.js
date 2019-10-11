import React from 'react';
import './Todo.css';

function Todo (props) {
    
    return (
        <div>
           
            <p className={props.todo.isCompleted ? 'done' : 'reg' } onClick={() => {props.handleToggle(props.todo); console.log(props.todoList)} }>{props.todo.todoItem}</p>
        </div>
    )
}

export default Todo;

