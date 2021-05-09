import { combineReducers } from 'redux';
import HotelReducer from './reducers/hotels';

export default combineReducers({
    hotels: HotelReducer
})