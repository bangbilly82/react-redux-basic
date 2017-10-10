import * as Actions from '../actions/Actions.js';
import uuid from 'uuid';

const initialState = [];

export const post = (state = initialState, action) => {
  switch(action.type){
    case Actions.ADD_POST:
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
