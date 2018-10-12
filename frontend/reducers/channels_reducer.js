import {RECEIVE_CHANNELS, RECEIVE_CHANNEL} from '.././actions/channel_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, {[action.channel.id]: action.channel});
    default:
      return state;
  };
};

export default channelReducer;
