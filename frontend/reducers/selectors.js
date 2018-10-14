export const getAllUsernames = ({entities}) => {
  return Object.values(entities.users).map(user => user.username);
};

export const getChannelMessages = ({entities}, channelId) => {
  return Object.values(entities.messages).filter(message => message.channel_id === channelId);
};
