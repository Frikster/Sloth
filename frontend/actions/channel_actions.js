export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
import * as channelAPI from '../util/channel_api_util';

export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannels = () => (dispatch) => {
  return channelAPI.fetchChannels().then(res => dispatch(receiveChannels(res)));
};

export const fetchChannel = (id) => (dispatch) => {
  return channelAPI.fetchChannels(id).then(res => dispatch(receiveChannel(res)));
};
