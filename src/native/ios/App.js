import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from '@navigators';
import store from '@store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    )
  }
}