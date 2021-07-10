import React from 'react';
import Home from './components/home/home';
import Projects from './components/projects/projects';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn dl-mode">
                Lite
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
