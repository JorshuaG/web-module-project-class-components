import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { inputValue: "" };
  }

  handleChange = (evt) => {
    this.setState({ ...this.state, inputValue: evt.target.value });
  };
  handleClick = (evt) => {
    evt.preventDefault();
    this.props.handleAddTask(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange}></input>
          <button onClick={this.handleClick}>Add ToDo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
