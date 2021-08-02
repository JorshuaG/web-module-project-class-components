import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.task.task}</p>
      </div>
    );
  }
}

export default Todo;
