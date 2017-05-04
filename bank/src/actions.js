export const SET_SELECTED_ACCOUNT = 'SET_SELECTED_ACCOUNT';
export const DEPOSIT = 'DEPOSIT';

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
  }
}
