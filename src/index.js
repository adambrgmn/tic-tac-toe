import './styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './scenes/Home';

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
