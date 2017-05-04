import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import the createStore method from Redux
import { createStore } from 'redux';

import { groceryApp } from './reducers';

import {
  addItem,
  setPurchasedFilter,
  setCategoryFilter,
  setSort
} from './actions';

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('initial store state:', store.getState());

store.dispatch(
  addItem({
    name: 'Tasty cucumber',
    description: 'It is tasty',
    category: 'Weapons',
    purchased: true,
    amount: 13
  })
);

store.dispatch(
  addItem({
    name: 'Healthy cucumber',
    description: 'It is healthy',
    category: 'Weapons',
    purchased: false,
    amount: 20
  })
);

store.dispatch(
  addItem({
    name: 'Gross cucumber',
    description: 'It is gross',
    category: 'Toys',
    purchased: true,
    amount: 6
  })
);

store.dispatch(setPurchasedFilter('PURCHASED'));

store.dispatch(setCategoryFilter('WEAPONS'));

store.dispatch(setSort('DESCRIPTION'));

unsubscribe();
