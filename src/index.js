import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import { imagesReducer } from './Reducers/ImagesReducer';
import * as serviceWorker from './serviceWorker';
import './styles/style.css';

const store = createStore(imagesReducer, compose(
  applyMiddleware (
    thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //подключил редакс.девтулс в браузере
))

const app = (
  <Provider store = {store}>
    <App />
  </Provider>
)
render(app ,document.getElementById('root'));


serviceWorker.unregister();
