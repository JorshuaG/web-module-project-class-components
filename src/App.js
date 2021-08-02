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
  handleCompleted = (id) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    });
  };
  handleAddTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todo: [...this.state.todo, newTask] });
  };
  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((task) => {
        return task.completed === false;
      }),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          handleCompleted={this.handleCompleted}
          toDoList={this.state.todo}
        />
        <TodoForm
          handleAddTask={this.handleAddTask}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
