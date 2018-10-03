import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(ReduxPromise));
}
