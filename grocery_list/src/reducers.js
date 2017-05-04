import { combineReducers } from "redux";

//import actions here
import {
  ADD_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT
} from "./actions";

function groceryItems(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    default:
      return state;
  }
}

function groceryFilters(
  state = { purchasedFilter: "SHOW_ALL", categoryFilter: "SHOW_ALL" },
  action
) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return Object.assign({}, state, { purchasedFilter: action.data });
    case SET_CATEGORY_FILTER:
      return Object.assign({}, state, { categoryFilter: action.data });
    default:
      return state;
  }
}

function grocerySort(state = 'NAME', action) {
  switch (action.type) {
    case SET_SORT:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({
  groceryItems,
  groceryFilters,
  grocerySort
});
