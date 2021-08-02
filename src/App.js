import React from "react";
import TodoList from "./components/TodoList";

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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoList={this.state.todo} />
        {/* <TodoForm /> */}
      </div>
    );
  }
}

export default App;
