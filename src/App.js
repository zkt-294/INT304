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
      <div className="App">
        <h1>Employee Management</h1>
<Routes>
  {/* Home page: Add Form + Employee List */}
  <Route
    path="/"
    element={
      <>
        <h1>Employee Management</h1>  {/* stays on home page */}
        <EmployeeForm onAddEmployee={addEmployee} />
        <EmployeeList employees={employees} />
      </>
    }
  />

  {/* Employee detail page */}
  <Route
    path="/employees/:id"
    element={
      <>
        <h1>Employee Details</h1>   {/* change heading here */}
        <EmployeeDetail employees={employees} />
      </>
    }
  />
</Routes>
      </div>
    </Router>
  );
}

export default App;