import { combineReducers } from 'redux';
import { counterReducer, errorReducer } from './Counter/counter.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    // error: errorReducer
});

export default rootReducer;