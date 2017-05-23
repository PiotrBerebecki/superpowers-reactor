import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import puzzlesSaga from './views/Puzzles/sagas';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = composeEnhancers(
  applyMiddleware(promiseMiddleware, sagaMiddleware)
)(createStore)(rootReducer);

export default store;

sagaMiddleware.run(puzzlesSaga);
