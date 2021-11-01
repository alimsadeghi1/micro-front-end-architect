// * Import Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './root-reducers';
import logger from 'redux-logger';

const middleWares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleWares));

export { store };