export const fetchUsers = () => {
  return $.ajax({
    url: `/api/users/`,
  });
};
