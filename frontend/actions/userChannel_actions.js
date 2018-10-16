export const RECEIVE_USER_CHANNELS = 'RECEIVE_USER_CHANNELS';
import * as userChannelAPI from '../util/userChannel_api_util';

export const receiveUserChannels = (userChannels) => {
  return {
    type: RECEIVE_USER_CHANNELS,
    userChannels
  };
};

export const fetchUserChannels = () => (dispatch) => {
  return userChannelAPI.fetchUserChannels().then(res => dispatch(receiveUserChannels(res)));
};
