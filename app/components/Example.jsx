var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
            <li>
                <Link to='/?location=Mount Olive, NJ'>Mount Olive, NJ</Link>
            </li>
            <li>
                <Link to='/?location=Maricopa, AZ'>Maricopa, AZ</Link>
            </li>
            </ol>      
        </div>
    )     
}

module.exports = Example;