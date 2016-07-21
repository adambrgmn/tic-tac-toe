import './favicon.ico';

/* eslint-disable global-require */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './scenes/Home';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
