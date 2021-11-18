import React from "react";
class Pick extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <button onClick = {this.props.Pick}>Pick</button> */}
        <button
          onClick={this.props.Pick}
          className="btn btn-outline-success mb-3"
        >
          Pick
        </button>
      </div>
    );
  }
}

export default Pick;
