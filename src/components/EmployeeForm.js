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
      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter employee email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter job title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
