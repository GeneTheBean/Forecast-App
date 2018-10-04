import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import Forecast from './containers/Forecast';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Forecast />
      </div>
    );
  }
}

export default App;
