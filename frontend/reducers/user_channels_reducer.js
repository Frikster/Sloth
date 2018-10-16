import {RECEIVE_CHANNEL} from '.././actions/channel_actions';
import {RECEIVE_USER_CHANNELS} from '.././actions/userChannel_actions';

const userChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_CHANNELS:
      return action.userChannels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, {[action.payload.user_channel.id]: action.payload.user_channel});
    default:
      return state;
  };
};

export default userChannelsReducer;
