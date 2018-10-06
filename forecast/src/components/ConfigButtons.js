import React, { Component } from 'react';

class ConfigButtons extends Component {
  render() {
    if (this.props.displayDaily !== null && this.props.displayHourly !== null) {
      const dailyClassName =
        this.props.active === 'daily' ? 'config-button btn btn-primary active' : 'config-button btn';
      const hourlyClassName =
        this.props.active === 'hourly' ? 'config-button btn btn-primary active' : 'config-button btn';
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
