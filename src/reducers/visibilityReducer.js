import * as Actions from '../actions/Actions.js';

const initialState = 'SHOW_ALL';

export const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}