export const signup = (user) => {
  return $.ajax({
    url: '/api/user/',
    method: 'POST',
    data: {user}
  });
};

export const login = (user) => (
  $.ajax({
    url: '/api/session/',
    method: 'POST',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session/',
    method: 'DELETE',
  })
);
