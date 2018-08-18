import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const enhancers = composeEnhancers(middleware);

const store = createStore(reducers, enhancers);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', async () => {
    // const nextRootReducer = require('./reducers.js').default;
    const nextRootReducer = (await import('./reducers')).default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
