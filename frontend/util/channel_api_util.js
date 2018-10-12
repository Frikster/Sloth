export const fetchChannels = () => {
  return $.ajax({
    url: `/api/channels/`,
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}`,
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    url: `/api/channels/`,
    method: 'POST',
    data: {channel}
  });
};

export const editChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${channel.id}`,
    method: 'PATCH',
    data: {channel}
  });
};

export const removeChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}`,
    method: 'DELETE'
  });
};
