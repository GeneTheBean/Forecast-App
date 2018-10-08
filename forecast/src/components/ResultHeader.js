import React from 'react';

const ResultHeader = ({ city }) => {
  const notFound = 'Could not find that city. Try again!';
  const header = 'Five Day Forecast for ';
  const text = city !== null ? header + "'" + city.name + "'" : notFound;
  return (
    <div align="center">
      <h1>{text}</h1>
    </div>
  );
};

export default ResultHeader;
