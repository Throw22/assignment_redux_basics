import { combineReducers } from 'redux';

//import actions here
import {
  SET_SELECTED_ACCOUNT,
  DEPOSIT
} from "./actions";

// state ={
//   accounts: [
//     {
//       id: 1,
//       balance: 100,
//       transations: [{ type: withdrawal, amount: 100, source: bank/account, end: bank/account, date}]
//     },
//     {
//       id: 2,
//       balance: 500
//     }
//   ],
//   selectedaccount: {},
//   transactions: [{ type: withdrawal, amount: 100, source: bank/account, end: bank/account, date},{ type: withdrawal, amount: 100, source: bank/account, end: bank/account}]
// }

const initialAccountState = {
  accounts: [],
  selectedAccount: {},
  transactions: []
}

function accounts(state = initialAccountState, action) {
  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.data
      };
    case DEPOSIT:
      let newTransaction = {
        type: 'deposit',
        amount: action.data.amount,
        origin: null,
        destination: action.data.destination,
        date: Date.now()
      }
      let newAccounts = state.acounts.map(account => {
        if (account.id === action.data.destination) {
          return {
            ...account,
            balance: account.balance + action.data.amount,
            transactions: [...account.transactions, newTransaction]
          }
        }
        return account;
      });
      return {
        ...state,
        accounts: newAccounts,
        transactions: [...state.transactions, newTransaction]
      };

    default:
      return state;
  }
}

export const bankApp = combineReducers({
  accounts
});
