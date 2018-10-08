import React, { Component } from 'react';
import WeatherListItem from '../components/WeatherListItem';

class WeatherList extends Component {
  renderList(list) {
    if (list != null) {
      return list.map(forecast => {
        return (
          <WeatherListItem
            key={forecast.key}
            temp={forecast.temp}
            humidity={forecast.humidity}
            skies={forecast.skies}
            clouds={forecast.clouds}
            winds={forecast.winds}
            date={forecast.date}
            main={forecast.main}
            active={this.props.active}
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="center-div">
        <ul className="weather-list">{this.renderList(this.props.list)}</ul>
      </div>
    );
  }
}

export default WeatherList;
