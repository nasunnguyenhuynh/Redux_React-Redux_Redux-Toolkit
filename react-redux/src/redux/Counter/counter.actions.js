import {
    INCREMENT, DECREMENT, MULTIPLICATION, LESS_THAN_ZERO,
    FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR
} from './counter.type';
import axios from 'axios';

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

// Start fetch APIs
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest())

        try {
            const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            const data = res && res.data ? res.data : []
            setTimeout(() => { dispatch(fetchUsersSuccess(data)) }, 5000)
        } catch (error) {
            console.log(error)
            dispatch(fetchUsersError())
        }
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data
    }
}

export const fetchUsersError = () => {
    return {
        type: FETCH_ERROR
    }
}