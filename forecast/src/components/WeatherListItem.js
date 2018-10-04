import React from 'react';
import moment from 'moment';

const WeatherListItem = ({forecast}) => {
  var tempConversion = (K) => {return parseInt(9 / 5 * (K - 273) + 32) + '°F'};
  var dateTime = new Date(forecast.dt_txt);
  var dateDay = moment(dateTime).format('dddd').toUpperCase();
  dateTime = moment(dateTime).format('MMMM Do YYYY hh:mm a');

  return (
    <li>
      <div>
        <div className='day'>{dateDay}</div>
        <div>
            <div>{dateTime.toUpperCase()}</div>
            <div>Temperature: {tempConversion(forecast.main.temp)}</div>
            <div>Humidity: {forecast.main.humidity}%</div>
            <div>Skies : {forecast.weather[0].description}</div>
            <div>Cloudiness : {forecast.clouds.all}%</div>
          <div>Winds : {forecast.wind.speed}mph</div>
        </div>
      </div>
    </li>
  );
};

export default WeatherListItem;
