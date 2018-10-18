import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import MainContainer from './main/main_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute, ProtectedChannelRoute} from '../util/route_util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal/modal';

library.add(faStroopwafel);
// import { Provider } from 'react-redux';

const App = () => (
  // Still have to make protected routes
  <div>
    <Modal />
    <Route exact path='/' component={SplashContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/channels/:channelId' component={MainContainer} />
  </div>
);

export default App;
// <ProtectedChannelRoute path='/channels/:channelId' component={MainContainer} />
