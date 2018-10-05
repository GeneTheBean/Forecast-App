import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: '' };
  }

  componentDidMount() {
    this.props.searchTerm('Manhattan');
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onInputSubmit(event) {
    event.preventDefault();
    this.props.searchTerm(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onInputSubmit.bind(this)}>
          <input
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            placeholder="Enter a city name for a forecast"
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTerm }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
