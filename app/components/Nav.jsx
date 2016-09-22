var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var searchValue = this.refs.navSearch.value;
        var encodedLocation = encodeURIComponent(searchValue);

        if (searchValue.length > 0) {
            this.refs.navSearch.value = "";
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">munkerDesigns(reactWeatherApp);</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather by city" ref="navSearch" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
        );
    }
});


module.exports = Nav;