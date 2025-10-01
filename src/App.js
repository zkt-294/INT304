import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeDetail from "./EmployeeDetail";
import "./components/EmployeeForm.css";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <Router>
      <Routes>
        {/* Homepage with background and centered content */}
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: "2rem",
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "white", textShadow: "1px 1px 4px #000" }}>
                Employee Management
              </h1>
              <EmployeeForm onAddEmployee={addEmployee} />
              <EmployeeList employees={employees} />
            </div>
          }
        />

        {/* Employee Detail page */}
        <Route
          path="/employees/:id"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: "2rem",
                textAlign: "center",
              }}
            >
              <h1>Employee Details</h1>
              <EmployeeDetail employees={employees} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;