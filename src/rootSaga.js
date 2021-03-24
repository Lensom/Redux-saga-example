import { all } from 'redux-saga/effects';
import { dogSagaWatcher } from './components/Recommendations/sagas';


export default function* rootSaga() {
  yield all([
    dogSagaWatcher()
  ])
}