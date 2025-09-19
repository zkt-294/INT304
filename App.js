import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import './components/EmployeeForm.css';
import './App.css';

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
    <div className="App">
      <h1>Add Employee</h1>
      <EmployeeForm onAddEmployee={addEmployee} />

      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <strong>{emp.name}</strong> — {emp.email} | {emp.jobTitle} ({emp.department})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;