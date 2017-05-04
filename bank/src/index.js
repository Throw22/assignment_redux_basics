import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';
import {bankApp} from './reducers';
import {
  setSelectedAccount
} from './actions';

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState())
})

console.log('Initial bank state:', store.getState());

store.dispatch(setSelectedAccount({
  id: 1,
  balance: 100,
  transations: []
}));
