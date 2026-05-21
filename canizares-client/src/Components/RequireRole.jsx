import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireRole = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireRole;
