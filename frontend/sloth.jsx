// import React from 'react';
// import ReactDOM from 'react-dom';
// import { signup, login, logout} from './actions/session_actions';
import {login, logout} from './util/session_api_util';
// import configureStore from './store/store.js';
//
// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   const root = document.getElementById('root');
//   window.signup = signup;
//   window.login = login;
//   window.logout = logout;
//   ReactDOM.render(<h1>Welcome to Sloth</h1>, root);
// });
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchChannels, createChannel} from './actions/channel_actions';

// import {fetchChannels} from './util/channel_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchChannels = fetchChannels;
  // window.createChannel = createChannel;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // TESTING END
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
