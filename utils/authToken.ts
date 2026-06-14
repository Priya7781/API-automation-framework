export const getAuthToken = () => {
  const configuredToken = process.env.API_AUTH_TOKEN?.trim();

  if (!configuredToken) {
    throw new Error('API_AUTH_TOKEN environment variable is required');
  }

  const token = configuredToken
    .replace(/^['"]|['"]$/g, '')
    .replace(/^Authorization:\s*/i, '')
    .replace(/^(Token|Bearer)\s+/i, '')
    .trim();

  if (!/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token)) {
    throw new Error(
      'API_AUTH_TOKEN must contain a JWT, with or without the Token prefix'
    );
  }

  return `Token ${token}`;
};
