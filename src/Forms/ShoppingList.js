import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import "./ShoppingList.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ number: 0 }]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    // Takes items from old state
    // puts them into new array with new item
    this.setState(state => ({
      items: [...state.items, item]
    }));
  }

  renderItems() {
    return (
      <ul className="numbers">
        {this.state.items.map((item, index, arr) => (
          <li
            className={
              "number" +
              (arr[index - 1] !== undefined &&
              arr[index - 1].number > arr[index].number
                ? "Drop"
                : "NOGO")
            }
          >
            {arr[index - 1] !== undefined &&
            arr[index - 1].number > arr[index].number
              ? item.number
              : "NO DROP " + arr[index].number}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <ShoppingListForm addItem={this.addItem} />
        {this.renderItems()}
      </div>
    );
  }
}

export default ShoppingList;
