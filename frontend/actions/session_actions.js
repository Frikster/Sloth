export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as sessionAPI from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => {
  sessionAPI.login(user).then(res => dispatch(receiveCurrentUser(res)));
};

// export const login = (user) => (dispatch) => {
//   sessionAPI.login(user).then(res => dispatch(receiveCurrentUser(res)),
//   err => dispatch(receiveErrors(err.responseJSON)));
// };

export const logout = () => (dispatch) => {
  sessionAPI.logout().then(res => dispatch(logoutCurrentUser()));
};

export const signup = (user) => (dispatch) => {
  sessionAPI.signup(user).then(res => dispatch(receiveCurrentUser(res)));
};

// export const signup = (user) => (dispatch) => {
//   sessionAPI.signup(user).then(res => dispatch(receiveCurrentUser(res)),
//   err => dispatch(receiveErrors(err.responseJSON)));
// };
