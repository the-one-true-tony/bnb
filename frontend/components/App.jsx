import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute } from '../util/route_util.jsx';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './locations/search_container';
import HomeContainer from './home/home_container';

const App = () => (
  <div>
    <section>
      <GreetingContainer />
    </section>
    <AuthRoute path="/login" component={ SessionFormContainer } />
    <AuthRoute path="/signup" component={ SessionFormContainer } />
    <Route exact path="/search" component={ SearchContainer } />
    <Route path="/" component={ HomeContainer } />

  </div>
);

export default App;
