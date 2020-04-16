import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
//import UTILS from "./utils";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //numbers: UTILS,
      currentRace: 0,
      auto: "",
      fiveMinNums: [],
      fiveMin: "",
      tenMinNums: [],
      tenMin: "",
      fifteenMinNums: [],
      fifteenMin: "",
      twoMinNums: [],
      twoMin: "",
      postNums: [],
      postMin: "",
      totalHorsesCurrent: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRaceNumChange = this.handleRaceNumChange.bind(this);
    this.handleNumChange2Min = this.handleNumChange2Min.bind(this);
    this.twoMinHandleSplit = this.twoMinHandleSplit.bind(this);
    this.handleNumChange5Min = this.handleNumChange5Min.bind(this);
    this.fiveMinHandleSplit = this.fiveMinHandleSplit.bind(this);
    this.handleNumChange10Min = this.handleNumChange10Min.bind(this);
    this.tenMinHandleSplit = this.tenMinHandleSplit.bind(this);
    this.handleNumChange15Min = this.handleNumChange15Min.bind(this);
    this.fifteenMinHandleSplit = this.fifteenMinHandleSplit.bind(this);
    this.handleNumChangePost = this.handleNumChangePost.bind(this);
    this.postHandleSplit = this.postHandleSplit.bind(this);
  }

  inputCurrent(num) {
    let claass = "";
    for (let i = 0; i < num; i++) {
      claass += "auto ";
    }
    this.setState({ auto: claass });
  }
  handleClick() {
    this.inputCurrent(this.state.currentRace);
    this.fifteenMinHandleSplit(this.state.fifteenMin);
    this.tenMinHandleSplit(this.state.tenMin);
    this.fiveMinHandleSplit(this.state.fiveMin);
    this.twoMinHandleSplit(this.state.twoMin);
    this.postHandleSplit(this.state.postMin);
  }

  handleRaceNumChange(event) {
    this.setState({ currentRace: event.target.value });
  }
  // 2 MIN OUT
  handleNumChange2Min(event) {
    this.setState({ twoMin: event.target.value });
  }
  twoMinHandleSplit(str) {
    let box1Split = str.split("$");
    let remove = box1Split.shift();
    console.log(remove);
    for (let i = 0; i < box1Split.length; i++) {
      if (box1Split[i].includes(",")) {
        let numm = box1Split[i].replace(",", " ");
        numm = numm.replace(/\s/g, "");
        box1Split[i] = numm;
      }
    }
    this.setState({ twoMinNums: box1Split });
  }
  // 5 MIN OUT
  handleNumChange5Min(event) {
    this.setState({ fiveMin: event.target.value });
  }
  fiveMinHandleSplit(str) {
    let box1Split = str.split("$");
    let remove = box1Split.shift();
    console.log(remove);
    for (let i = 0; i < box1Split.length; i++) {
      if (box1Split[i].includes(",")) {
        let numm = box1Split[i].replace(",", " ");
        numm = numm.replace(/\s/g, "");
        box1Split[i] = numm;
      }
    }
    this.setState({ fiveMinNums: box1Split });
  }
  // 10 MIN OUT
  handleNumChange10Min(event) {
    this.setState({ tenMin: event.target.value });
  }
  tenMinHandleSplit(str) {
    let box1Split = str.split("$");
    let remove = box1Split.shift();
    console.log(remove);
    for (let i = 0; i < box1Split.length; i++) {
      if (box1Split[i].includes(",")) {
        let numm = box1Split[i].replace(",", " ");
        numm = numm.replace(/\s/g, "");
        box1Split[i] = numm;
      }
    }
    this.setState({ tenMinNums: box1Split });
  }
  // 15 MIN OUT
  handleNumChange15Min(event) {
    this.setState({ fifteenMin: event.target.value });
  }
  // 15 Handle Split;
  fifteenMinHandleSplit(str) {
    let box1Split = str.split("$");
    let remove = box1Split.shift();
    console.log(remove);
    let total = box1Split.length;
    this.setState({ totalHorsesCurrent: total });
    //console.log(total);
    for (let i = 0; i < box1Split.length; i++) {
      if (box1Split[i].includes(",")) {
        let numm = box1Split[i].replace(",", " ");
        numm = numm.replace(/\s/g, "");
        box1Split[i] = numm;
      }
    }
    this.setState({ fifteenMinNums: box1Split });
  }
  // POST TIME
  handleNumChangePost(event) {
    this.setState({ postMin: event.target.value });
  }
  postHandleSplit(str) {
    let box1Split = str.split("$");
    let remove = box1Split.shift();
    console.log(remove);
    for (let i = 0; i < box1Split.length; i++) {
      if (box1Split[i].includes(",")) {
        let numm = box1Split[i].replace(",", " ");
        numm = numm.replace(/\s/g, "");
        box1Split[i] = numm;
      }
    }
    this.setState({ postNums: box1Split });
  }

  // DONT ADD CODE BELOW THIS
  render() {
    const divStyle = {
      gridTemplateColumns: this.state.auto,
    };

    return (
      <div>
        <h1>CHARTING APP</h1>
        <label>15 Min</label>
        <input
          type="text"
          id="box1"
          value={this.state.value}
          onChange={this.handleNumChange15Min}
        />
        <label>10 Min</label>
        <input
          type="text"
          id="box1"
          value={this.state.value}
          onChange={this.handleNumChange10Min}
        />
        <label>5 Min</label>
        <input
          type="text"
          id="box1"
          value={this.state.value}
          onChange={this.handleNumChange5Min}
        />
        <label>2 Min</label>
        <input
          type="text"
          id="box1"
          value={this.state.value}
          onChange={this.handleNumChange2Min}
        />
        <label>POST TIME</label>
        <input
          type="text"
          id="box1"
          value={this.state.value}
          onChange={this.handleNumChangePost}
        />

        <label>Horses in NEXT race</label>
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleRaceNumChange}
        />
        <button className="btn" onClick={this.handleClick}>
          Generate
        </button>

        <div style={divStyle} className="grid-container">
          {this.state.fifteenMinNums.map((n, index) => (
            <Ball
              //num={n}
              totalHorsesCurrent={this.state.totalHorsesCurrent}
              currentRace={this.state.currentRace}
              key={index}
              id={index + 1}
              fiveMinNum={this.state.fiveMinNums[index]}
              twoMinNum={this.state.twoMinNums[index]}
              tenMinNum={this.state.tenMinNums[index]}
              fifteenMinNum={n}
              postNum={this.state.postNums[index]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Lottery;
