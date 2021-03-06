export const getAllUsernames = ({entities}) => {
  return Object.values(entities.users).map(user => user.username);
};

export const getChannelMessages = ({entities}, channelId) => {
  const messages = Object.values(entities.messages).filter(message => message.channel_id.toString() === channelId.toString());
  return messages.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.created_at) - new Date(b.created_at);
  });
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

export const getMergedMessages = ({ entities }, channelName1, channelName2) => {
  const mergedChannels = Object.values(entities.channels).filter(channel => channel.name === channelName1 || channel.name === channelName2);
  const mergedChannelsIds = mergedChannels.map(channel => channel.id);
  return Object.values(entities.messages).filter(message => message.channel_id.toString() === mergedChannelsIds[0].toString() || message.channel_id.toString() === mergedChannelsIds[1].toString());
};

export const getChannelByName = ({ entities }, channelName) => {
  return Object.values(entities.channels).filter(channel => channel.name === channelName);
}; 