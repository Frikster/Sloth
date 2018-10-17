export const fetchUserChannels = () => {
  return $.ajax({
    url: `/api/user_channels/`,
  });
};

export const createUserChannel = (userChannel) => {
  return $.ajax({
    url: `/api/user_channels/`,
    method: 'POST',
    data: {userChannel}
  });
};
