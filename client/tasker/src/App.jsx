import React from "react";
import "./App.css";
import EmployeeList from "./EmployeeList";
import TaskList from "./TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmployeeSelection = this.handleEmployeeSelection.bind(this);
    this.state = { selectedEmployee: this.props.employees[0] };
  }

  handleEmployeeSelection(employeeId) {
    this.setState((state, props) => {
      const selectedEmployee = props.employees.filter(
        //used name instead of ID for now
        employee => employee.name === employeeId
      )[0];

      return { selectedEmployee };
    });
  }

  render() {
    const { employees } = this.props;
    const { selectedEmployee } = this.state;

    return (
      <div>
        <EmployeeList
          employees={employees}
          onEmployeeSelected={this.handleEmployeeSelection}
        />
        <TaskList tasks={selectedEmployee.tasks} />
      </div>
    );
  }
}

export default App;
