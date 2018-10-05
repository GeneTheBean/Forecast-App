import React from 'react';
import moment from 'moment';
import Icons from '../img/icons/Icons';
const WeatherListItem = props => {
  console.log(Icons[props.main]);
  var tempConversion = K => {
    return parseInt((9 / 5) * (K - 273) + 32) + '°F';
  };
  var dateTime = new Date(props.date);
  var dateDay = moment(dateTime)
    .format('dddd')
    .toUpperCase();

  if (props.active === 'daily') {
    dateTime = moment(dateTime).format('MMMM Do');
  } else if (props.active === 'hourly') {
    dateTime = moment(dateTime).format('MMMM Do hh:mma');
  }

  return (
    <li className="weather-item list-inline-item">
      <div>
        <div className="day">{dateDay}</div>
        <div className="weather-description">
          <div className="icon">
            <img
              className="thumbnail"
              src={Icons[props.main]}
              alt={props.main}
            />
          </div>
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
      </div>
    </li>
  );
};

export default WeatherListItem;
