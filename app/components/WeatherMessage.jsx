var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
        <h3>The current new weather is {temp} in {location}</h3>
    )
}

module.exports = WeatherMessage;