import React from "react";
import AddItems from "./AddItems";
import Items from "./Items";
import RemoveAll from "./RemoveAll";
import Pick from "./Pick";
import "./App1.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: ["Javascript", "Python", "c++"] };
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

  // when component did mount the items will be get back to the state
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("tasks")).tasks) {
      this.setState({ tasks: [] });
    } else {
      const t = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: t.tasks });
    }
  }

  // when component changed the items post to Local Storage
  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state));
  }

  // function to add item to the list
  addItem(newTask) {
    if (newTask === "") {
      return "Empty is not allowed...";
    } else if (newTask.length < 4) {
      return "Item should be greater than 4 words...";
    } else if (this.state.tasks.indexOf(newTask) >= 0) {
      return "Item already is in the list...";
    }
    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }

  // function to remove all items in list
  RemoveAll() {
    this.setState({ tasks: [] });
  }

  // function for picking one task from state randomly
  Pick() {
    const length = this.state.tasks.length;
    const rand = Math.floor(Math.random() * length);
    if (this.state.tasks.length <= 0) {
      alert("Local Storage is empty, Please add some item and try again!");
    } else {
      alert(this.state.tasks[rand]);
    }
  }

  // funtion for cross icon along side with item
  RemoveSingleTask(task) {
    const remainingTasks = this.state.tasks.filter((t) => {
      return t !== task;
    });
    this.setState({ tasks: remainingTasks });
  }
}

export default App;
