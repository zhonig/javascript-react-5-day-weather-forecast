import WeatherActions from '../actions/weather_actions.js';

class WeatherApiUtil {
  getForecastData (lat, lng, location) {
    const receiveWeatherData = (data) => WeatherActions.receiveWeatherData(data.list, location);

    const query = `forecast?lat=${ lat }&lon=${ lng }`;
    const apikey = "appid=980deca03be38de9b336e2a1f7efde8a";
    const units = "units=imperial";
    const url = `https://api.openweathermap.org/data/2.5/${ query }&${ apikey }&${ units }`;

    $.get(url).done(receiveWeatherData);
  }
}

export default new WeatherApiUtil();