import React, { Component } from 'react';

class ConfigButtons extends Component {
  render() {
    if (this.props.displayDaily !== null && this.props.displayHourly !== null) {
      const dailyClassName =
        this.props.active === 'daily' ? 'btn btn-primary active' : 'btn';
      const hourlyClassName =
        this.props.active === 'hourly' ? 'btn btn-primary active' : 'btn';
      return (
        <div align='center'>
          <button
            className={dailyClassName}
            type="button"
            onClick={() => this.props.displayDaily()}
          >
            Daily
          </button>
          <button
            className={hourlyClassName}
            type="button"
            onClick={() => this.props.displayHourly()}
          >
            Hourly
          </button>
        </div>
      );
    } else return <div />;
  }
}

export default ConfigButtons;
