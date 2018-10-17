export const RECEIVE_USER_CHANNELS = 'RECEIVE_USER_CHANNELS';
export const RECEIVE_USER_CHANNEL = 'RECEIVE_USER_CHANNEL';
import * as userChannelAPI from '../util/userChannel_api_util';

export const receiveUserChannels = (user_channels) => {
  return {
    type: RECEIVE_USER_CHANNELS,
    user_channels
  };
};

export const receiveUserChannel = (payload) => {
  return {
    type: RECEIVE_USER_CHANNEL,
    payload
  };
};

export const fetchUserChannels = () => (dispatch) => {
  return userChannelAPI.fetchUserChannels().then(res => dispatch(receiveUserChannels(res)));
};

export const createUserChannel = (userChannel) => (dispatch) => {
  return userChannelAPI.createUserChannel(userChannel).then(res => dispatch(receiveUserChannel(res)));
};
