import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', title: '', department: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', title: '', department: '' });
  };

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-row">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-row">
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-row">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;
