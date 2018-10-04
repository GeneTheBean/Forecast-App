# FDWF

How to build and run
In the cmd, chage the directory to FDFW/forecast and run these commands.

```
> npm install
> npm start
```

My thought process when creating the solution

Firstly, I took a look at the OpenWeatherMap and saw they had a 5 day forecast available in JSON or XML. I decided
to have my application retrieve a five day forecast based on a city name search. To see how that worked I took a look
at the documentation for some sample API calls. The API call to search a forecast by city name returns an XML file
with some key values (location, name and forecast). The forecast key contains a list of all of the forecasts I need
to display.

The first thing I think of before writing up my application is application state. What kind of data does my application need to handle in order to function? In this case it is an object containing all of the appropriate forecast information.

The second thing I do is make the distinction between the parts of my application that are components and the parts that are containers. Components should only deal with showing date (rendering things on the page). On the other hand, containers should work with Redux in order to modify the state of the application by dispatching actions.

Then I model my application state.

The project will have:
Containers
Search Bar - A search bar that takes a city name as search id. It will call an action creator to make an AJAX request to OpenWeatherMap
Weather List - Creates the list of weather events to be displayed. It needs to have access to application state.

COMPONENTS:
Weather List Item - The objects that represent each forecast event in the state.

I used the create-react-app tool to setup an empty react project. I then set up Redux with react-redux. The first thing I want to set up is the search bar.

SEARCH BAR:
SearchBar needs to be able to modify the state of our application by dispatching actions. It needs to call an action creator.
"someone just entered a search term, we need to make an API request". It needs to talk to Redux so, therefore it needs to be a container.

It will have an form tag that will be a controlled field. This means that is form element where the value of input is set by the state of the component, not the other way around. We achieve this by setting the value of the input to be a field in the state (this.state.term), and setting onChange to an event handler that handles the input. The form submission should make a call to an action creator.

After setting up the Redux store, I set up the container with a mapDispatchToProps function. It will be passed in an action creator to make the AJAX request.

Setting up the API call:

Firstly, I need to make a developer account for OpenWeatherMap and make use of the account's clientID and secretID keys. API keys should never be pushed to public repositories so I keep them in a separate file that will be listed in .gitignore. I use the axios client to make the AJAX call. I'll need to make a reducer to handle the data returned by the dispatched action. I use the redux-promise middleware to ensure that the data fetched from the asynchronous request is being passed to my reducer. To test if the data from the AJAX request is being returned correctly I console log it. However, there is the case where the city searched isn't found. For this I return null, I'll have to think about how to handle this later on. For now, everything seems to be in order, so I'm going to make my Weather List container next.

WEATHERLIST:
WeatherList needs to be able to display information based on the application state. To set this up, I use a matchStateToProps function which pulls the forecast object from the state and passes it into the container's props. The first thing I'm going to make is display some text after searches to give some information about the search(city name or search not found).

The forecasts prop can be in three states:
1. An empty object (initial state).
2. An object which contains forecast info (search successful)
3. null (search unsuccessful)

Now that I think about it, it would be cleaner to have the information be separated into another component. It'll be a child component (ResultHeader) of WeatherList with the needed properties passed in.

WEATHERLIST ITEM:
The WeatherList item will make use of the map function to return a new WeatherListItem for each forecast entry. The WeatherList item will be a component which have all of the information needed passed in by the WeatherListContainer. The temperature values for OpenWeatherMap are measured in kelvins, so I have to convert them to Fahrenheit. I use the moment.js package to handle the time formatting. 



Tradeoffs I made

Anything I implement with more time (features, fixes, technical debt corrections, etc)
Instead of just listing all of the entries one after the other, I'd like to make a table of sorts. However, instead of it being a table, I'm seeing it as a list of lists. Each item in the list will be a listing for all of the hourly forecasts for a certain day. So I'm thinking it will be a horizontally aligned list of vertically aligned list items.
