import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore);

/** configure and create data store
 * @param {obj} initialState - passed in from app.js
 * @returns {function} buildStore
 */
export default function (initialState) {
  return finalCreateStore(reducers, initialState);
}
