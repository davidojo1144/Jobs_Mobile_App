// app.config.js
export default ({ config }) => {
  return {
    ...config,
    extra: {
      rapidApiKey: process.env.RAPID_API_KEY,
      // other env variables
    },
  };
};