const API_URL = 'https://your-api-url.com';

interface LoginCredentials {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  expires: number;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  const data: AuthResponse = await response.json();
  localStorage.setItem('userToken', data.token);  // Store token in local storage
  return data;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem('userToken');  // Clear the token from local storage
};
