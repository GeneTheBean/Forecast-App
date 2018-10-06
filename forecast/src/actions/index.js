import axios from 'axios';

const key = require('../config/keys').API_Key;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function searchTerm(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
