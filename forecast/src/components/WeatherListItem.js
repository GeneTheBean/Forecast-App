import React from 'react';
import moment from 'moment';

const WeatherListItem = props => {
  var tempConversion = K => {
    return parseInt((9 / 5) * (K - 273) + 32) + '°F';
  };
  var dateTime = new Date(props.date);
  var dateDay = moment(dateTime)
    .format('dddd')
    .toUpperCase();

  if (props.active === 'daily') {
    dateTime = moment(dateTime).format('MMMM Do YYYY');
  } else if (props.active === 'hourly') {
    dateTime = moment(dateTime).format('MMMM Do YYYY hh:mm a');
  }

  return (
    <li>
      <div>
        <div className="day">{dateDay}</div>
        <div>
          <div>{dateTime}</div>
          <div>Temperature: {tempConversion(props.temp)}</div>
          <div>Humidity: {props.humidity}%</div>
          <div>Skies : {props.skies}</div>
          <div>Cloudiness : {props.clouds}%</div>
          <div>
            Winds : {props.winds}
            mph
          </div>
        </div>
      </div>
    </li>
  );
};

export default WeatherListItem;
