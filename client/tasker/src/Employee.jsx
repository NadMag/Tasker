import React from "react";

const Employee = ({ employee, handleClick }) => (
  <li onClick={e => handleClick(employee.name)}> {employee.name}</li>
);

export default Employee;
