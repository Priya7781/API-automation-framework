export const getAuthToken = () => {
  const token = process.env.API_AUTH_TOKEN?.trim().replace(/^['"]|['"]$/g, '');

  if (!token) {
    throw new Error('API_AUTH_TOKEN environment variable is required');
  }

  return token.startsWith('Token ') ? token : `Token ${token}`;
};
