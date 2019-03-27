import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './routes/Home';
import Rackets from './routes/Rackets.js';
import Strings from './routes/Strings.js';
import Posts from './routes/Posts.js';
import Login from './routes/Login.js';
import MyPage from './routes/MyPage.js';
import Search from './routes/Search.js';
import NotFound from './routes/NotFound';

import Header from './components/Headers.js';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rackets/:username" component={Rackets} />
          <Route path="/strings" component={Strings} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
