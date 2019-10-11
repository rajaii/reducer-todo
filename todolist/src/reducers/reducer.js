import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actions.js';

export const initialState = {
    todo: [{
    todoItem: 'do laundry',
    isCompleted: false,
    id: 0
    },
    {
    todoItem: 'do homework',
    isCompleted: false,
    id: 1
    },
    {
    todoItem: 'wash car',
    isCompleted: false,
    id: 2
    }]
}





export function todoReducer(state, action) {
    
    switch(action.type) {
        case ADD_TODO:
            return {
             todo: [...state.todo, action.payload]
            }
        case TOGGLE_TODO:
         {
            state.todo[action.payload.id].isCompleted = !state.todo[action.payload.id].isCompleted;

            return {
                todo: [
                    ...state.todo
                ]
            }
        }
        case REMOVE_TODO: 
            const newT = state.todo.filter(t => t.isCompleted === false);
            return {
                todo: newT
            }
        default:
            return state
    }
}

