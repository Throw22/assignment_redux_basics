import { combineReducers } from 'redux';
import { SET_SELECTED_ACCOUNT, DEPOSIT, WITHDRAW, TRANSFER } from './actions';

const initialAccountState = {
  accounts: [
    {
      id: 1,
      balance: 0
    },
    {
      id: 2,
      balance: 0
    }
  ],
  selectedAccount: {},
  transactions: []
  //Are we expecting more accounts with fewer transactions or fewer accounts with more transactions?
};

function accounts(state = initialAccountState, action) {
  let updatedAccount;
  let newTransaction;
  let newAccounts;

  switch (action.type) {

    case SET_SELECTED_ACCOUNT:
      //Filter for account or make employee enter full account object?
      // newSelectedAccount = state.accounts.filter(accout => {
      //   return account.id == data.id;
      // })
      return {
        ...state,
        selectedAccount: action.data
      };

    case DEPOSIT:
      newTransaction = {
        type: 'deposit',
        amount: action.data.amount,
        origin: null,
        destination: state.selectedAccount.id,
        date: action.data.date
      };
      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount.id) {
          updatedAccount = {
            ...account,
            balance: account.balance + action.data.amount
          };
        }
        return updatedAccount;
      });
      return {
        ...state,
        accounts: newAccounts,
        selectedAccount: updatedAccount,
        transactions: [...state.transactions, newTransaction]
      };

    case WITHDRAW:
      newTransaction = {
        type: 'withdraw',
        amount: action.data.amount,
        origin: state.selectedAccount.id,
        destination: null,
        date: action.data.date
      };
      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount.id) {
          updatedAccount = {
            ...account,
            balance: account.balance - action.data.amount
          };
        }
        return updatedAccount;
      });
      return {
        ...state,
        accounts: newAccounts,
        selectedAccount: updatedAccount,
        transactions: [...state.transactions, newTransaction]
      };

    case TRANSFER:
      newTransaction = {
        type: 'transfer',
        amount: action.data.amount,
        origin: action.data.origin,
        destination: action.data.destination,
        date: action.data.date
      };
      newAccounts = state.accounts.map(account => {
        if (account.id === action.data.origin) {
          updatedAccount = {
            ...account,
            balance: account.balance - action.data.amount
          }
          return updatedAccount;
        } else if (account.id === action.data.destination) {
          updatedAccount = {
            ...account,
            balance: account.balance + action.data.amount
          }
          return updatedAccount;
        } else {
          return account;
        }
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
