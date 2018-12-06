export const getAllUsernames = ({entities}) => {
  return Object.values(entities.users).map(user => user.username);
};

export const getChannelMessages = ({entities}, channelId) => {
  return Object.values(entities.messages).filter(message => message.channel_id.toString() === channelId.toString());
};

export const getJoinedChannels = ({session, entities}) => {
  const userId = session.id;
  const channel_ids = Object.values(entities.userChannels)
    .filter(userChannel => userChannel.user_id.toString() === userId.toString())
    .map(userChannel => userChannel.channel_id);
  return Object.values(entities.channels).filter(channel => channel_ids.includes(channel.id));
};

export const getJoinedUsers = ({entities}, channelId) => {
  const user_ids = Object.values(entities.userChannels)
    .filter(userChannel => userChannel.channel_id.toString() === channelId.toString())
    .map(userChannel => userChannel.user_id);
  return Object.values(entities.users).filter(user => user_ids.includes(user.id));
};

export const getAllPrivateChannels = ({entities}) => {
  return Object.values(entities.channels).filter(channel => channel.direct_message_channel);
};

export const getAllPublicChannels = ({entities}) => {
  return Object.values(entities.channels).filter(channel => !channel.direct_message_channel);
};

export const getAllPrivateChannelsOfCurrentUser = (state) => {
  return getJoinedChannels(state).filter(channel => channel.direct_message_channel);
}
