import * as Actions from '../actions/Actions.js';
import uuid from 'uuid';

const initialState = [];

export const comment = (state = initialState, action) => {
  switch(action.type){
    case Actions.ADD_COMMENT:
        return [
            ...state,
            {
                id: uuid.v1(),
                author: action.comment.author,
                text: action.comment.text
            }
        ]
    default:
        return state;
  }
}
