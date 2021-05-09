import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/hotels';
import * as api from '../api/hotels';

function* getHotels() {
    console.log('getHotels...');
    try {
        const result = yield call(api.getHotels);
        console.log('hotels sagas : ', result);
        yield put(actions.getHotelsSuccess({
			items: result
		}));
    } catch (e) {
        yield put(actions.hotelsError({
            error: 'An error occurred when trying to get the hotels'
        }));
    }
}

function* watchGetHotelsRequest() {
    yield takeEvery(actions.Types.GET_SLOTS_REQUEST, getHotels);
}

const HotelsSagas = [
    fork(watchGetHotelsRequest)
]

export default HotelsSagas;