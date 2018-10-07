# Five Day Weather Forecast
A five day weather forecast built in React.
> Demo: [http://five-forecast.herokuapp.com/](http://five-forecast.herokuapp.com/)

You can use this page to search for a five day forecast by location. You have the option to see a daily or hourly view of the forecast.

## How to build and run
In the cmd, chage the directory to FDFW/forecast and run these commands.
```
> npm install
> npm start
```

## My thought process when creating the solution
I used the create-react-app tool to setup this project.

The technologies I used for this application are React.js and Redux.js. I chose to use React because it's simple to use and can create all of the front-end components my application needs. Along with React, I set up my application with Redux, because it cleans up my code by separating application state and rendering.

The first thing I think of before writing up my application is modeling application state. I draw a visual outline of the project and think about what data I need to build my app. I figure out what type of data my application needs to handle. In this case it is an object containing all of the appropriate forecast information. After taking a look at the OpenWeatherMap docs, I decided to have my application retrieve a five day forecast with both the search options of city name and zipcode. Searching by city can create ambiguity.

The second thing I do is make the distinction between the parts of my application that are components and the parts that are containers.

#### Containers
Forecast - The top-level container. It's responsible for constructing and passing any needed properties to app's components.
SearchBar - A search bar that takes a city name as search id.

#### Component
ResultHeader - Displays the heading text result of the search
ConfigButtons - Buttons to switch from an hourly or daily display
WeatherList - Creates an unordered list of weather events to be displayed on the page.
WeatherList Item - The list tags that represent each forecast event in the state.

#### Setting up the API call
I use the axios client to make the AJAX call, and use the redux-promise middleware to ensure that the data fetched from the asynchronous request is being passed to my reducer.

## Tradeoffs I made

## Things I would implement with more time (features, fixes, technical debt corrections, etc)
If I had more time I'd make use of CSS animations to make the page more responsive.

## Credits
Icons made by iconixar from www.flaticon.com is licensed by CC
