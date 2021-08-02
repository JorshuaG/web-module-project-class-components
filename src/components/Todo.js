import React, { Component } from "react";
import styled from "styled-components";

const StyledToDo = styled.div`
  .completedLine {
    text-decoration: line-through;
  }
`;

class Todo extends Component {
  handleClick = () => {
    this.props.handleCompleted(this.props.task.id);
  };
  render() {
    return (
      <StyledToDo>
        <div>
          <p
            onClick={this.handleClick}
            className={
              this.props.task.completed === true ? "completedLine" : ""
            }
          >
            {this.props.task.task}
          </p>
        </div>
      </StyledToDo>
    );
  }
}

export default Todo;
