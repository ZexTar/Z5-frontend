import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers/reducers';

const [update, route] = reducers;
const rootReducers = combineReducers({ update, route });
const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
