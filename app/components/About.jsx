var React = require('react');

var About = (props) => {
    return (
        <div className="row">
            <h1 className="text-center page-title">About</h1>
            <p>This is my first full ReactJS project, It also is the first first project to be commited to GitHub and Heroku. This is just another step in the right direction as a web developer!</p>
            <p>Please visit my <a href="http://www.munkerdesigns.com" target="_blank" >personal page (munkerDesigns.com)</a> which will be getting updated after I learn more about ReactJS.</p>
            <h5>Languages and Tools I used in this project include:</h5>
            <ul>
                <li>Javascript</li>
                <li><a href="https://facebook.github.io/react" target="_blank" >ReactJS</a></li>
                <li><a href="http://openweathermap.org" target="_blank" >Open Weather Map</a></li>
                <li>Node.js</li>
                <li>Babel</li>
                <li>jQuery</li>
                <li>Foundation</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Command Line</li>
                <li>Heroku</li>
            </ul>
        </div>
    )
};
module.exports = About;