import { createStore, combineReducers } from 'redux';
import * as Reducers from '../reducers';

const store = createStore(
    combineReducers(
        {
            todosReducer: Reducers.todosReducer,
            visibilityReducer: Reducers.visibilityReducer
        }
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
