import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultHeader from '../components/ResultHeader';
import WeatherList from '../components/WeatherList';

class Forecast extends Component {
  isEmpty(object) {
    return Object.keys(object).length === 0;
  }

  render() {
    const nullForecast = this.props.forecasts === null;
    if (nullForecast || !this.isEmpty(this.props.forecasts)) {
      const city =
        nullForecast ? null : this.props.forecasts.city;
      const list = nullForecast ? [] : this.props.forecasts.list;
      return (
        <div>
          <ResultHeader city={city} />
          <WeatherList list={list} />
        </div>
      );
    } else
      return (
        <div>
          <h1>Enter a city name to get a forecast</h1>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return { forecasts: state.forecasts };
}

export default connect(mapStateToProps)(Forecast);
