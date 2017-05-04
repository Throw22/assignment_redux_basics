// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import { createStore } from 'redux';
import { bankApp } from './reducers';
import { setSelectedAccount, deposit, withdraw, transfer } from './actions';

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

console.log('Initial bank state:', store.getState());

store.dispatch(
  setSelectedAccount({
    id: 1,
    balance: 0,
    transactions: []
  })
);

store.dispatch(
  deposit({
    destination: 1,
    amount: 100,
    date: Date.now()
  })
);

store.dispatch(
  withdraw({
    origin: 1,
    amount: 50,
    date: Date.now()
  })
);
