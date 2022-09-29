import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Index} from 

function Routers() {
  return (
    <Router>
    <div>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                 <Link to="/about/">About</Link>
            </li>
        </ul>
        </nav>
        <Route path="/" exact component={Index}/>
    </div>
    </Router>

  );
}

export default Routers