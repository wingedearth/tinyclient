import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

const mainElement = document.getElementById('main');

/**
 * @param  {func} fn callback to run when DOM is ready
 * @return {undefined}
 */
function whenDOMIsReady (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
}

/**
 * start app.js when DOM is loaded
 * @returns {undefined}
 */
function startApp () {
  const initialState = window.__INITIAL_STATE__;
  const store = configureStore(initialState);

  const renderElement = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  render(renderElement, mainElement);
  if (module.hot) {
    module.hot.accept('./components/Home', () => {
      render(
        <Provider store={store}>
            <Home />
        </Provider>,
        mainElement
      );
    });
  }
}

// when the DOM is ready, Start the App!
whenDOMIsReady(startApp);
