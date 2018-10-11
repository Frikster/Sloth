import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import ChannelContainer from './channel/channel_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
// import { Provider } from 'react-redux';

const App = () => (
  // Still have to make protected routes
  <div>
    <Route exact path='/' component={SplashContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/channels' component={ChannelContainer} />
  </div>
);

export default App;
