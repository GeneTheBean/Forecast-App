import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  forecasts: WeatherReducer
});

export default rootReducer;
