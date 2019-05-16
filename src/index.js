import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory';


import './index.scss';
import App from './App';
import configureStore from './store';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
