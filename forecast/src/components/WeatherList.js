import React, { Component } from 'react';
import weekday from '../util/Day'
import WeatherListItem from '../components/WeatherListItem'

class WeatherList extends Component {

  renderList() {
    if(this.props.list != null) {
      return this.props.list.map((forecast) => {
        return (
          <WeatherListItem
            key={forecast.dt}
            forecast={forecast}
          />
        );
      })
    }
  }

  getDay(date) {
    return weekday[new Date(date).getDay()];
  }

  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default WeatherList;
