export const RECEIVE_USERS = 'RECEIVE_USERS';
import * as userAPI from '../util/user_api_util';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = () => (dispatch) => {
  return userAPI.fetchUsers().then(res => dispatch(receiveUsers(res)));
};
