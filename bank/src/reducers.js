import { combineReducers } from 'redux';

//import actions here
// import {
//   ADD_ITEM,
//   SET_PURCHASED_FILTER,
//   SET_CATEGORY_FILTER,
//   SET_SORT
// } from "./actions";
state = {
  accounts: [
    {
      id: 1,
      balance: 100
    },
    {
      id: 2,
      balance: 500
    }
  ],
  selectedaccount: {}
};

array.map(function(el) {
  if (id == action.data) {
    //replace account that matches with updated account that has selected == true
    selectedEl = el;
    selectedEl.selected = true;
    return selectedEl;
  }
});

function accounts(state = initialAccounts, action) {
  switch (action.type) {
    case VIEW_ACCOUNT:
      return state.map();
    default:
      return state;
  }
}
