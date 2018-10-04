import { FETCH_WEATHER } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.error ? null : action.payload.data;

    default:
      return state;
  }
};
