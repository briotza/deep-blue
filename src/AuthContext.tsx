import React, { createContext, useState, ReactNode, useContext } from "react";

interface User {
  name: string;
  email: string;
  username: string;
}

interface AuthContextProps {
  user: User | null;
  email: string | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const login = (name: string, email: string) => {
    setUser({ name, email, username: email.split('@')[0] }); 
    setEmail(email);
  };

  const logout = () => {
    setUser(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ user, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
