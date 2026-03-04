import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("fittrackUser")) || null
  );

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // If server responds with error (400, etc.)
      if (!res.ok) {
        return { 
          success: false, 
          message: data.message || "Login failed" 
        };
      }

      // If login is successful
      const userData = {
        email: data.email,
        role: data.role,
        token: data.token,
      };

      setUser(userData);
      localStorage.setItem("fittrackUser", JSON.stringify(userData));

      return { success: true };

    } catch (error) {
      return { 
        success: false, 
        message: "Server error. Please try again." 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fittrackUser");
  };

  const hasRole = (role) => user?.role === role;

  return (
    <AuthContext.Provider value={{ user, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
