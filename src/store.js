import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  // For Redux DevTools
  const composeEnhancers =
    typeof window === 'object' && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}
