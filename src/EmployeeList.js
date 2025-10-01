import { Link } from "react-router-dom";
import { useState } from "react";

function EmployeeList({ employees }) {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Employee list */}
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;