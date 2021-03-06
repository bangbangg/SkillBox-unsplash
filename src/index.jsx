import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { loadState, saveState } from './Helpers/localStorage';
import { imagesReducer } from './Reducers/ImagesReducer';
import * as serviceWorker from './serviceWorker';
import './styles/style.scss';

const persistedState = loadState();

const store = createStore(imagesReducer, persistedState, 
  applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));

serviceWorker.unregister();
