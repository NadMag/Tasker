import React, { Component } from "react";
import Employee from "./Employee";

class EmployeeList extends Component {
  render(props) {
    const { employees, onEmployeeSelected } = this.props;
    return (
      <ul>
        {employees.map(employee => (
          <Employee
            key={employee.name}
            employee={employee}
            handleClick={onEmployeeSelected}
          />
        ))}
      </ul>
    );
  }
}

export default EmployeeList;
