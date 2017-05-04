export const SET_SELECTED_ACCOUNT = 'SET_SELECTED_ACCOUNT';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const TRANSFER = 'TRANSFER';

export function setSelectedAccount(data) {
  return {
    type: SET_SELECTED_ACCOUNT,
    data: data
  };
}

export function deposit(data) {
  return {
    type: DEPOSIT,
    data
  };
}

export function withdraw(data) {
  return {
    type: WITHDRAW,
    data
  };
}

export function transfer(data) {
  return {
    type: TRANSFER,
    data
  };
}
