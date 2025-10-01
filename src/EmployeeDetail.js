import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

<Link to="/">⬅ Back to Employee List</Link>
function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
}

export default EmployeeDetail;