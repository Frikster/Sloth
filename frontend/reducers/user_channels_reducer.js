import {RECEIVE_CHANNEL} from '.././actions/channel_actions';
import {RECEIVE_USER_CHANNELS} from '.././actions/userChannel_actions';
import {RECEIVE_USER_CHANNEL} from '.././actions/userChannel_actions';


const userChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_CHANNELS:
      return action.user_channels;
    case RECEIVE_USER_CHANNEL:
      return Object.assign({}, state, {[action.payload.user_channel.id]: action.payload.user_channel});
    case RECEIVE_CHANNEL:
      // let newState = state;
      // debugger
      // action.payload.user_channels.forEach(user_channel => {
      //   newState = Object.assign({}, newState, {[user_channel.id]: user_channel});
      // });
      // return newState;
      return Object.assign({}, state, {[action.payload.user_channel.id]: action.payload.user_channel});
    default:
      return state;
  };
};

export default userChannelsReducer;
