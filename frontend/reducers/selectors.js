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
