export const fetchMessages = () => {
  return $.ajax({
    url: `/api/messages/`,
  });
};

export const fetchMessage = (id) => {
  return $.ajax({
    url: `/api/messages/${id}`,
  });
};

export const createMessage = (message) => {
  return $.ajax({
    url: `/api/messages/`,
    method: 'POST',
    data: {message}
  });
};

export const editMessage = (id) => {
  return $.ajax({
    url: `/api/messages/${message.id}`,
    method: 'PATCH',
    data: {message}
  });
};

export const removeMessage = (id) => {
  return $.ajax({
    url: `/api/messages/${id}`,
    method: 'DELETE'
  });
};
