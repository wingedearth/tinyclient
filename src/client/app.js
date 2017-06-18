import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import buildStore from './redux/store';
import {Provider} from 'react-redux';

setTimeout(() => {
  const initialState = window.__INITIAL_STATE__;
  const store = buildStore(initialState);

  render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById('main')
  );
}, 10);
