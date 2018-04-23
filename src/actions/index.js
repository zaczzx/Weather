import axios from 'axios';

const API_KEY = '1d0c45d3fd7a55ecf3e521a24f32532c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=1308168cb4b7eb24a2e47006d099d5a9${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
