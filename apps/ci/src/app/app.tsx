import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './components/logo/logo';
import Typography from './components/typography/typography';
import Images from './components/images/images';
import Colors from './components/colors/colors';
import Icons from './components/icons/icons';
import Layout from './components/layout/layout';

export function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <ul className="nav">
            <li className="nav-item nav-logo">
              <div className="logo">
                <img src="/assets/svg-seeklogo.com.svg" alt="" />
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Logo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/typography" className="nav-link">
                Typography
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/colours" className="nav-link">
                Colour Palette
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/images" className="nav-link">
                Imagery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/icons" className="nav-link">
                Iconography
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/layout" className="nav-link">
                Layout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <Switch>
          <Route exact path="/">
            <Logo />
          </Route>
          <Route path="/typography">
            <Typography />
          </Route>
          <Route path="/colours">
            <Colors />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/icons">
            <Icons />
          </Route>
          <Route path="/layout">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
