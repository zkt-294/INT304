import React, { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !jobTitle.trim() || !department.trim()) return;

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      jobTitle: jobTitle.trim(),
      department: department.trim(),
    };

    onAddEmployee(newEmployee);

    setName("");
    setEmail("");
    setJobTitle("");
    setDepartment("");
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Job Title:</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;