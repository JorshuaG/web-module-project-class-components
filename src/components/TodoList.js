// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.toDoList.map((task) => (
          <Todo
            handleCompleted={this.props.handleCompleted}
            task={task}
            key={task.id}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
