import { combineReducers } from 'redux';
import { counterReducer, errorReducer, userReducer } from './Counter/counter.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    // error: errorReducer
    user: userReducer
});

export default rootReducer;