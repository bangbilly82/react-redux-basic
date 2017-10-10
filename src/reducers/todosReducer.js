import * as Actions from '../actions/Actions.js';

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case Actions.ADD_TODO:
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                created_at: action.created_at,
                completed: false
            }
        ]
    case Actions.TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
    case Actions.DELETE_TODO:
        return state.filter(todo => {
           if(todo.id !== action.id) return todo;
        })
    default:
        return state;
  }
}
