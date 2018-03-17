export const userType = user => {
  return Object.assign(
    {},
    {
      key: user.uid,
      email: user.email,
      lastLogin: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime
    }
  );
};
