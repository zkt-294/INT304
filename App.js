import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import './components/EmployeeForm.css';
import './App.css'; // make sure this is included

function App() {
  return (
    <div className="App">
      <h1>Add Employee</h1>
      <EmployeeForm />
    </div>
  );
}

export default App;