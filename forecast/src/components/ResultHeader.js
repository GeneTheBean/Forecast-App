import React from 'react';

const ResultHeader = ({ forecasts }) => {
  let city;
  let notFound = 'Could not find that city. Try again!';
  if (forecasts != null) {
    if (Object.keys(forecasts).length !== 0) {
      city = 'Five Day Forecast for ' + forecasts.city.name;
    }
  }
  const text = forecasts !== null ? city : notFound;
  return <div>{text}</div>;
};

export default ResultHeader;
