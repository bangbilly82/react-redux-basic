import * as Actions from '../actions/Actions';
import uuid from 'uuid';
import moment from 'moment';

export const addTodo = text => {
  return {
    type: Actions.ADD_TODO,
    id: uuid.v1(),
    created_at: moment().format('LLL'),
    text
  }
}

export const toggleTodo = id => {
  return {
    type: Actions.TOGGLE_TODO,
    id
  }
}

export const deleteTodo = id => {
  return {
    type: Actions.DELETE_TODO,
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: Actions.SET_VISIBILITY_FILTER,
    filter
  }
}