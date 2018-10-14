export const getAllUsernames = ({entities}) => {
  return Object.values(entities.users).map(user => user.username)
};
