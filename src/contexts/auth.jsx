import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createAccessLogin } from "../service/api";
export const AuthContext = createContext();

export const AuthProvicer = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createAccessLogin(email, password);

    const loggedUser = response.data;
    const token = response.data.access_token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear("user");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
