import React from "react";

const Task = ({ task }) => {
  const { title, description, priority, state, estimate } = task;
  return (
    <tr>
      <td> {title} </td>
      <td> {description} </td>
      <td> {priority} </td>
      <td> {state} </td>
      <td> {estimate} </td>
    </tr>
  );
};

export default Task;
