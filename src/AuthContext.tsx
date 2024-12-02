import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  email: string | null;
  password: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(() => {
    const storedEmail = localStorage.getItem("email");
    return storedEmail ? storedEmail : null;
  });

  const [password, setPassword] = useState<string | null>(() => {
    return null;
  });

  const login = (email: string, password: string) => {
    setEmail(email);
    setPassword(password); 
    localStorage.setItem("email", email); 
  };

  const logout = () => {
    setEmail(null); 
    setPassword(null);
    localStorage.removeItem("email"); 

  };

  return (
    <AuthContext.Provider value={{ email, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
