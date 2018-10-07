import React from 'react';
import moment from 'moment';
import Icons from '../img/icons/Icons';

const WeatherListItem = props => {
  var tempConversion = K => {
    return parseInt((9 / 5) * (K - 273) + 32) + '°F';
  };
  var dateTime = new Date(props.date);
  var dateDay = moment(dateTime)
    .format('dddd')
    .toUpperCase()
    .substring(0, 3);

  if (props.active === 'daily') {
    dateTime = '';
  } else if (props.active === 'hourly') {
    dateTime = moment(dateTime).format('hh:mma');
  }

  return (
    <li className='weather-item list-inline-item'>
      <div>
        <div className='day'>{dateDay}</div>
        <div className='weather-description'>
          <div className='icon'>
            <img
              className='thumbnail'
              src={Icons[props.main]}
              alt={props.main}
            />
          </div>
          <div>
            <div className='date'>{dateTime}</div>
            <div className='temperature'>{tempConversion(props.temp)}</div>
            <div className='info'>
              <div>{props.skies}</div>
              <div>Humidity: {props.humidity}%</div>
              <div>Cloudiness: {props.clouds}%</div>
              <div>
                Winds: {props.winds}
                mph
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WeatherListItem;
