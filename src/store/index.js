/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

// on importe les middlewares
import debugMiddleware from 'src/middlewares/debug';
import APIMiddleware from 'src/middlewares/api';
import websocketMiddleware from 'src/middlewares/websocket';

const middlewares = applyMiddleware(
  debugMiddleware,
  APIMiddleware,
  websocketMiddleware,
);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
