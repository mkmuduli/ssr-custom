import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch,getState, api) => {
  const res = await api('/users/xss');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};