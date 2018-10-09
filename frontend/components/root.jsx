import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

//: how to tell the GreetingContainer doesn't go here?
// - Because this encloses whole app to make store available everywhere

const Root = ({store}) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;
