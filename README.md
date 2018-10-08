# Forecast-App
A five day weather forecast built in React.
> Demo: [http://five-forecast.herokuapp.com/](http://five-forecast.herokuapp.com/)

You can use this page to search for a five day forecast by location. You have the option to see a daily or hourly view of the forecast.

## How to build and run
In the cmd, chage the directory to /forecast and run these commands.
```
> npm install
> npm start
```
Then go to localhost:3000 in your web browser.

## My thought process when creating the solution
I used the create-react-app tool to setup this project for convenience. 

The technologies I used for this application are React.js and Redux.js. I chose to use React because it's simple to use and can create all of the front-end components my application needs. Along with React, I set up my application with Redux, because it cleans up my code by separating application state and rendering.

#### Additional Packages
axios - I'm going to need to handle an API request to OpenWeatherMap in order to retrieve forecast information. I use axios to simplify the data handling of this request

redux-promise - I use this middleware to pass the data fetched from the asynchronous request to the application state.

moment - I use this package because it simplifies date conversion and formatting.

The first thing I think of before writing up my application is modeling application state. I draw a visual outline of the project and think about what data I need to build my app. In this case, the data I work with is an object containing all of the appropriate forecast information. After taking a look at the OpenWeatherMap docs, I decided to have my application retrieve a five day forecast with both the search options of city name and zipcode, since searching by city can create ambiguity.

The second thing I do is make the distinction between the parts of my application that are components and the parts that are containers. Components should only deal with showing date (rendering things on the page). On the other hand, containers should work with Redux in order to modify the state of the application by dispatching actions.

#### Containers
Forecast - The top-level container. It's responsible for constructing and passing any needed properties to app's components.

SearchBar - A search bar that takes a city name as search id. It can call an action creator that makes the api request.

#### Components
ResultHeader - Displays the heading text result of the search

ConfigButtons - Buttons to switch from an hourly or daily display

WeatherList - Creates an unordered list of weather events to be displayed on the page.

WeatherListItem - The list tags that represent each forecast event in the state.


#### Styling
I bootstrapped my application using the npm bootstrap package because it's quick and easy to setup for styling.

## Tradeoffs I made
The libraries I used included files which increased the overall size of my application. However, I made this tradeoff in order to speed up the development process and write more maintainable code.

## Things I would implement with more time (features, fixes, technical debt corrections, etc)
If I had more time I'd make use of CSS animations to make the page more visually appealing.

## Credits
Icons made by iconixar from www.flaticon.com is licensed by CC
