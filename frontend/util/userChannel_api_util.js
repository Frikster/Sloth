export const fetchUserChannels = () => {
  return $.ajax({
    url: `/api/user_channels/`,
  });
};
