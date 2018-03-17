export const userType = user => {
  return Object.assign(
    {},
    {
      key: user.uid,
      email: user.email,
      lastLogin: user.metadata ? user.metadata.lastSignInTime : "",
      creationTime: user.metadata ? user.metadata.creationTime : ""
    }
  );
};
