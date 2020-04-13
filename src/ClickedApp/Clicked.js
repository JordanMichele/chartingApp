import React, { Component } from "react";
import "./Clicked.css";

class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    //this.setState({ clicked: true });
    this.setState({ num: randomNum });
  }

  render() {
    const magicNum = this.state.num === 7 ? "YOU WIN!!" : "";
    let num = this.state.num === 7 ? 7 : this.state.num;
    let className;
    if (magicNum) {
      className = "Clicked-magicNum";
    }
    return (
      <div>
        <h1>Number is: {num}</h1>
        <h3>{magicNum}</h3>
        <button className={className} onClick={this.handleClick}>
          Random Number
        </button>
      </div>
    );
  }
}

export default Clicked;
