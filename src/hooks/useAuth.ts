import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};
