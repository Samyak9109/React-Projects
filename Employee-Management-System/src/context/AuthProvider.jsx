import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateEmployeeData = (updatedEmployees) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }));
  };

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployeeData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
