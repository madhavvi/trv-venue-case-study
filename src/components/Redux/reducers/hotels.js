import { Types } from '../actions/hotels';

const INITIAL_STATE = {
    items: []
};

export default function hotels(state = INITIAL_STATE, action){
    switch(action.type){
        case Types.GET_HOTELS_SUCCESS: {
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.HOTELS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state;
        }
    }
}