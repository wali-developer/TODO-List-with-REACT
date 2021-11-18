import React from "react";
import AddItems from "./AddItems";
import Items from "./Items";
import RemoveAll from "./RemoveAll";
import Pick from "./Pick";
import "./App1.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: ["Javascript", "Python", "C++", "Java", "PHP"] };
    this.RemoveAll = this.RemoveAll.bind(this);
    this.Pick = this.Pick.bind(this);
    this.addItem = this.addItem.bind(this);
    this.RemoveSingleTask = this.RemoveSingleTask.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>TODO List (react)</h1>
        <AddItems addItem={this.addItem} />
        <Pick Pick={this.Pick} />
        <Items
          tasks={this.state.tasks}
          RemoveSingleTask={this.RemoveSingleTask}
        />
        <RemoveAll RemoveAll={this.RemoveAll} />
      </div>
    );
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("tasks")).tasks) {
      this.setState({ tasks: [] });
    } else {
      const t = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: t.tasks });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state));
  }

  addItem(newTask) {
    if (newTask === "") {
      return "Empty is not allowed...";
    } else if (newTask.length < 4) {
      return "Item should greater than 4 words...";
    } else if (this.state.tasks.indexOf(newTask) >= 0) {
      return "Item already is in the list...";
    }
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  RemoveAll() {
    this.setState({ tasks: [] });
  }

  Pick() {
    const length = this.state.tasks.length;
    const rand = Math.floor(Math.random() * length);
    alert(this.state.tasks[rand]);
  }

  RemoveSingleTask(task) {
    const remainingTasks = this.state.tasks.filter((t) => {
      return t !== task;
    });
    this.setState({ tasks: remainingTasks });
  }
}

export default App;
