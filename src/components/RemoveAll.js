import React from "react";
class RemoveAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.props.RemoveAll}
          className="btn btn-outline-danger my-3"
        >
          Remove All
        </button>
      </div>
    );
  }
}

export default RemoveAll;
