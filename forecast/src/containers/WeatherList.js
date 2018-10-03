import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultHeader from '../components/ResultHeader';

class WeatherList extends Component {
  render() {
    return (
      <div>
        <ResultHeader forecasts={this.props.forecasts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forecasts: state.forecasts };
}

export default connect(mapStateToProps)(WeatherList);
