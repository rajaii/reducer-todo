export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo (todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo (todos) {
    return {
        type: REMOVE_TODO,
        payload: todos
    }
}

export function toggleTodo (todo) {
    return {
        type: TOGGLE_TODO,
        payload: todo,
            }
}