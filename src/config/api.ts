export const apiConfig = () => {
  return {
    endpoints: {
      session: {
        default: 'sessions',
        me: 'me',
      },
    },
  };
};
