import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('analyticsSpireUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    // SIMULATED LOGIN FOR DEMO
    // In a real app, this would verify against Google Sheets or a Backend
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin@analyticsspire.com' && pass === 'admin123') {
          const newUser: User = { email, name: 'Anand Rengasamy', role: 'admin' as UserRole.ADMIN };
          setUser(newUser);
          localStorage.setItem('analyticsSpireUser', JSON.stringify(newUser));
          resolve(true);
        } else if (email === 'client@test.com' && pass === 'client123') {
           const newUser: User = { email, name: 'Test Client', role: 'client' as UserRole.CLIENT };
           setUser(newUser);
           localStorage.setItem('analyticsSpireUser', JSON.stringify(newUser));
           resolve(true);
        } else {
          resolve(false);
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('analyticsSpireUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};