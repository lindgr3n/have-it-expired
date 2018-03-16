export const userType = user => {
  return Object.assign({}, { key: user.uid, email: user.email });
};
