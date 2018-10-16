export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as sessionAPI from '../util/session_api_util';

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => {
  // debugger
  return sessionAPI.login(user).then(res => dispatch(receiveCurrentUser(res)),
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => (dispatch) => {
  return sessionAPI.logout().then(res => dispatch(logoutCurrentUser()));
};

export const signup = (user) => (dispatch) => {
  return sessionAPI.signup(user).then(res => dispatch(receiveCurrentUser(res)),
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateErrors = (errors) => (dispatch) => {
  return dispatch(receiveErrors(errors));
};
