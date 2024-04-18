import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
