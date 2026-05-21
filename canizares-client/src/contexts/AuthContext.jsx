import { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, loginUser as loginUserAPI } from '../services/userService';
import { fetchMe } from '../services/authService';

const AuthContext = createContext();




export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const stored = localStorage.getItem('authState');
      if (!stored) {
        setUser(null);
        setToken(null);
        setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(stored);
        const storedToken = parsed?.token;
        if (!storedToken) {
          localStorage.removeItem('authState');
          setUser(null);
          setToken(null);
          setLoading(false);
          return;
        }

        setToken(storedToken);

        // Validate token with backend to avoid premature redirects.
        const me = await fetchMe();
        setUser(me.user || null);
        setLoading(false);
      } catch (error) {
        localStorage.removeItem('authState');
        setUser(null);
        setToken(null);
        setLoading(false);
      }
    };

    init();
  }, []);

  const signup = async (userData) => {
    const response = await registerUser({ ...userData, role: userData.role || 'editor' });
    return response.data;
  };

  const login = async (email, password) => {
    const response = await loginUserAPI({ email, password });
    const { token: authToken, role, firstName, email: userEmail, id } = response.data;
    const authState = {
      token: authToken,
      user: { id, email: userEmail, role, firstName },
    };
    localStorage.setItem('authState', JSON.stringify(authState));
    setToken(authToken);
    setUser(authState.user);
  };

  const logout = () => {
    localStorage.removeItem('authState');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


