import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [storedCredentials, setStoredCredentials] = useState(null);

  useEffect(() => {
    // Load stored credentials from localStorage
    const stored = localStorage.getItem('authCredentials');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setStoredCredentials(parsed);
        setUser(parsed.user);
      } catch (e) {
        localStorage.removeItem('authCredentials');
      }
    }
    setLoading(false);
  }, []);

  const signup = (email, password) => {
    const credentials = {
      email,
      password, // In real app, hash this!
      user: { email }
    };
    localStorage.setItem('authCredentials', JSON.stringify(credentials));
    setStoredCredentials(credentials);
    setUser(credentials.user);
  };

  const login = (email, password) => {
    const stored = localStorage.getItem('authCredentials');
    if (!stored) {
      throw new Error("No account found. Please sign up first.");
    }

    const storedCreds = JSON.parse(stored);
    
    if (storedCreds.email !== email || storedCreds.password !== password) {
      throw new Error("Invalid email or password.");
    }

    setStoredCredentials(storedCreds);
    setUser(storedCreds.user);
  };

  const logout = () => {
    localStorage.removeItem('authCredentials');
    setStoredCredentials(null);
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

