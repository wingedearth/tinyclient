import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import Home from '../../client/components/Home';
import reducers from '../../client/redux/reducers';

require('../../client/scss/main.scss');

/**
 * Root controller for root router
 * @param {obj} req - request object
 * @param {obj} res - response object
 * @returns {obj} response with homepage
 */
export default function (req, res) {

  const store = createStore(reducers);
  const markup = renderToString(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const initialState = {
    todos: [{
      id: 0,
      completed: false,
      text: 'Initial todo for demo purposes'
    }],
    user: {
      username: 'Andrew',
      id: 1
    }
  };
  const data = {markup, initialState};

  return res.render('index', data);
}
