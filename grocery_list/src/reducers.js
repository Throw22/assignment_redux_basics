import { combineReducers } from 'redux';

//import actions here
import {
  ADD_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT
} from './actions';

function groceryItems(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
  }
}
