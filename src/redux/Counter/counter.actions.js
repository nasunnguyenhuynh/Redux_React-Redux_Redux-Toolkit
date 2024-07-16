import { INCREMENT, DECREMENT, MULTIPLICATION, LESS_THAN_ZERO } from './counter.type';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const multiplyCounter = () => {
    return {
        type: MULTIPLICATION,
    };
};

export const lessThanZero = () => {
    return {
        type: LESS_THAN_ZERO,
    };
};