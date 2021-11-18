import React from "react";
class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.add = this.add.bind(this);
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.add}>
          <div class="input-group mb-3">
            <input
              type="text"
              name="taskName"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              type="submit"
              class="btn btn-outline-success"
              value="Add item"
              style={{ marginLeft: "5px" }}
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
  add(e) {
    e.preventDefault();
    const text = e.target.elements.taskName.value;
    const err = this.props.addItem(text);
    this.setState({ error: err });
  }
}

export default AddItems;
