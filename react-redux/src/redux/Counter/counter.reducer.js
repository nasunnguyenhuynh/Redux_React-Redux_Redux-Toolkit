import {
    INCREMENT, DECREMENT, MULTIPLICATION, LESS_THAN_ZERO,
    FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR
} from './counter.type';


const INITIAL_STATE = {
    count: 0,
    name: 'Nasun',
    Msg: ''
};

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            if (state.count - 1 < 0) {
                return {
                    ...state, Msg: 'Number cannot be less than zero'
                };
            } else {
                return {
                    ...state, count: state.count - 1,
                };
            }
        case MULTIPLICATION:
            return {
                ...state, count: state.count * 2,
            };
        default: return state;
    }
};

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LESS_THAN_ZERO:
            return {
                ...state,
                Msg: 'Number cannot less than zero'
            };
        default: return state;
    }
};

const INITIAL_USER_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            console.log('FETCH_REQUEST ', action)
            return {
                ...state, 
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            console.log('FETCH_SUCCESS ', action)
            return {
                ...state, 
                listUsers: action.data,
                isLoading: false,
                isError: false
            };
        case FETCH_ERROR:
            console.log('FETCH_ERROR ', action)
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default: return state;
    }
};