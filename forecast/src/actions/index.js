import axios from 'axios';

const key = require('../config/keys').API_Key;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function searchTerm(term) {
  const url = typeof term === 'number' ? `${ROOT_URL}&zip=${term},us`: `${ROOT_URL}&q=${term},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
