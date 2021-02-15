import React from 'react';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Algos from './pages/algos';
import Cloud from './pages/cloud';
import Health from './pages/health';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';
import WebDev from './pages/web-dev';
import BlogViewr from './pages/blog-viewer';

function App() {
  const user = {
    firstName: 'Aiden',
    lastName: 'Kim',
  };
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        {/* <Switch>
                    <Route path="/:page" component={PageRenderer} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch> */}
        <Switch>
          <Route path="/algos" component={Algos} />
          <Route path="/cloud" component={Cloud} />
          <Route path="/health" component={Health} />
          <Route path="/login" component={Login} />
          <Route path="/post/:id" component={Post} />
          <Route path="/web-dev" component={WebDev} />
          <Route path="/edit-post" component={BlogViewr} />
          <Route path="/" component={Home} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
