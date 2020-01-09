import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHistory as history } from 'history';

// Reducers
import auth from './reducers/authReducer';

import Routes from './Routes';

// Styles
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  auth
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
