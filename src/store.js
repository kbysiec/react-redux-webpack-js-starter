import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

export default store;
