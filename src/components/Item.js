import React from "react";
class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li
          className="list-group-item list-group-item-warning"
          key={this.props.k}
        >
          {this.props.taskName}
          <i
            onClick={(e) => this.props.RemoveSingleTask(this.props.taskName)}
            className="fas fa-window-close cursor-pointer"
            style={{ fontSize: "25px", float: "right" }}
          />
        </li>
      </div>
    );
  }
}

export default Item;
