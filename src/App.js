import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const toDoListData = [
  {
    task: "Finish MVP",
    id: 123456,
    completed: false,
  },
  {
    task: "Style MVP",
    id: 654321,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: toDoListData,
    };
  }
  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todo: [...this.state.todo, newTask] });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoList={this.state.todo} />
        <TodoForm handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default App;
