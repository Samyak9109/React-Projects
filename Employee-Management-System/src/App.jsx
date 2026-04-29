import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored && authData) {
      const parsed = JSON.parse(stored);
      if (parsed.role === "admin") {
        setUser("admin");
      } else if (parsed.role === "employee" && parsed.id && authData.employees) {
        const emp = authData.employees.find((e) => e.id === parsed.id);
        if (emp) {
          setUser("employee");
          setLoggedInUserData(emp);
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return true;
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", id: employee.id })
        );
        return true;
      }
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  // Keep loggedInUserData fresh from context
  const employees = authData?.employees || [];
  const freshEmployeeData = loggedInUserData
    ? employees.find((e) => e.id === loggedInUserData.id) || loggedInUserData
    : null;

  if (!user) return <Login handleLogin={handleLogin} />;
  if (user === "admin") return <AdminDashboard onLogout={handleLogout} />;
  if (user === "employee" && freshEmployeeData)
    return <EmployeeDashboard data={freshEmployeeData} onLogout={handleLogout} />;

  return <Login handleLogin={handleLogin} />;
};

export default App;
