import React from "react";
import Item from "./Item";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ol className="list-group">
          {this.props.tasks.map((task, key) => {
            return (
              <Item
                taskName={task}
                k={key}
                RemoveSingleTask={this.props.RemoveSingleTask}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Items;
