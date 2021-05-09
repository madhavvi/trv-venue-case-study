import HotelsSagas from './sagas/hotels';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...HotelsSagas
    ])
}