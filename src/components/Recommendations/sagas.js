import { call, put, takeLatest } from 'redux-saga/effects';
import { getDogError, getDogSuccess } from './actions';
import { GET_DOG_REQUEST } from './constants';
import getTopic from './service';

export function* getDogSaga() {
  try {
    const response = yield call(getTopic);
    yield put(getDogSuccess(response));
  } catch (error) {
    yield put(getDogError(error));
  }
}

export function* dogSagaWatcher() {
  yield takeLatest(GET_DOG_REQUEST, getDogSaga);
}
