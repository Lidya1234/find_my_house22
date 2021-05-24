import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from '../src/routes/Route';
import store from '../src/reducers/index'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Route />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
