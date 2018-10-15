import {RECEIVE_CHANNELS, RECEIVE_CHANNEL} from '.././actions/channel_actions';
import {RECEIVE_CURRENT_USER} from '.././actions/session_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.payload.channel.id]: action.payload.channel});
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      debugger
      return Object.assign({}, state, {[action.payload.channel.id]: action.payload.channel});
    default:
      return state;
  };
};

export default channelReducer;
