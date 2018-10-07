import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultHeader from '../components/ResultHeader';
import ConfigButtons from '../components/ConfigButtons';
import WeatherList from '../components/WeatherList';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
  }

  componentDidMount() {
    this.setState({ active: 'daily' });
  }

  isEmpty(object) {
    return Object.keys(object).length === 0;
  }

  toggleDisplay() {
    const active = this.state.active === 'daily' ? 'hourly' : 'daily';
    this.setState({ active });
  }

  //returns a new list of items with averaged values.
  //in the cases of skies and main, it chooses to use the most frequent entry
  dailyList(list) {
    const arr = [];
    let key = 0;
    let day;
    let date;
    let listItem;
    let skiesCount;
    let mainCount;
    let itemCount, totalTemp, totalHumidity, totalCloudiness, totalWinds;
    for (let i = 0; i < list.length; i++) {
      const current = this.getDay(list[i].dt_txt);
      if (day !== current || i === list.length - 1) {
        if (day !== undefined) {
          listItem['key'] = key;
          listItem['temp'] = totalTemp / itemCount;
          listItem['humidity'] = parseInt(totalHumidity / itemCount);
          listItem['clouds'] = parseInt(totalCloudiness / itemCount);
          listItem['winds'] = (totalWinds / itemCount).toFixed(2);
          listItem['skies'] = this.getMaxKey(skiesCount);
          listItem['main'] = this.getMaxKey(mainCount);
          listItem['date'] = date;
          arr.push(listItem);
          key++;
        }
        day = current;
        listItem = {};
        date = list[i].dt_txt;
        itemCount = 0;
        totalTemp = 0;
        totalHumidity = 0;
        totalCloudiness = 0;
        totalWinds = 0;
        skiesCount = new Map();
        mainCount = new Map();
      }
      itemCount++;
      totalTemp += list[i].main.temp;
      totalHumidity += list[i].main.humidity;
      totalCloudiness += list[i].clouds.all;
      totalWinds += list[i].wind.speed;
      const sCount = skiesCount.get(list[i].weather[0].description) || 0;
      skiesCount.set(list[i].weather[0].description, sCount + 1);
      const mCount = mainCount.get(list[i].weather[0].main) || 0;
      mainCount.set(list[i].weather[0].main, mCount + 1);
    }
    return arr;
  }

  //returns a new list of items with exact values
  hourlyList(list) {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      const listItem = {};
      listItem['key'] = i;
      listItem['temp'] = list[i].main.temp;
      listItem['humidity'] = list[i].main.humidity;
      listItem['clouds'] = list[i].clouds.all;
      listItem['winds'] = list[i].wind.speed;
      listItem['skies'] = list[i].weather[0].description;
      listItem['main'] = list[i].weather[0].main;
      listItem['date'] = list[i].dt_txt;
      arr.push(listItem);
    }
    return arr;
  }

  //Iterates through an object to return the key of the highest value
  getMaxKey(obj) {
    let max = 0;
    let maxKey;
    for (const [key, value] of obj) {
      if (value > max) {
        max = value;
        maxKey = key;
      }
    }
    return maxKey;
  }

  getDay(date) {
    return new Date(date).getDay();
  }

  componentDidUpdate(prevProps) {
    if (this.props.forecasts !== prevProps.forecasts) {
      if (this.props.forecasts != null) {
        this.setState({
          dailyList: this.dailyList(this.props.forecasts.list),
          hourlyList: this.hourlyList(this.props.forecasts.list)
        });
      }
    }
  }

  render() {
    const forecasts = this.props.forecasts;
    const nullForecast = forecasts === null;
    if (nullForecast || !this.isEmpty(forecasts)) {
      //Create values to be passed to child components
      const city = nullForecast ? null : forecasts.city;
      const toggleDisplay = nullForecast ? null : this.toggleDisplay.bind(this);

      let list =
        this.state.active === 'daily'
          ? this.state.dailyList
          : this.state.hourlyList;

      //Clear the list in the case of a search error
      if (nullForecast) list = [];

      return (
        <div>
          <ResultHeader city={city} />
          <ConfigButtons
            toggleDisplay={toggleDisplay}
            active={this.state.active}
          />
          <WeatherList list={list} active={this.state.active} />
        </div>
      );
    } else return <div />;
  }
}

function mapStateToProps(state) {
  return { forecasts: state.forecasts };
}

export default connect(mapStateToProps)(Forecast);
