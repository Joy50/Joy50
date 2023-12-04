// GitHub.js
const baseUrl = 'https://api.github.com';

export const getRepositories = async (username) => {
  try {
    const response = await fetch(`${baseUrl}/users/${username}/repos`, {
      headers: {
        Authorization: 'Bearer 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', // Replace with your token
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching repositories');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
