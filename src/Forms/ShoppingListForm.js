import React, { Component } from "react";
import "./ShoppingListForm.css";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ number: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="number">1 W/ 1: </label>
          <input
            id="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            className="formInput"
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default ShoppingListForm;
