import {RECEIVE_CURRENT_USER} from '.././actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, state, {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  };
};

export default usersReducer;
