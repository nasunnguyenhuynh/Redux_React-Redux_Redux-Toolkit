import { INCREMENT, DECREMENT, MULTIPLICATION, LESS_THAN_ZERO } from './counter.type';


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