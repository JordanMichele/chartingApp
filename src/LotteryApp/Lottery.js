import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
//import UTILS from "./utils";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horsesThisRace: 0,
      horsesNextRace: 0,
      columns: [],
      rows: [],
      auto: "",
      rowNums: "",
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
      summedTotals: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRaceNumChange = this.handleRaceNumChange.bind(this);
    this.handleCurHorseNum = this.handleCurHorseNum.bind(this);
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
    this.totalPercentChange = this.totalPercentChange.bind(this);
    this.percentChangeRow = this.percentChangeRow.bind(this);
    this.percentChange = this.percentChange.bind(this);
    this.percentChangeInc = this.percentChangeInc.bind(this);
    this.rowNumber = this.rowNumber.bind(this);
  }

  totalPercentChange() {
    let tenMinNum = this.state.tenMinNums[0];
    let fiveMinNum = this.state.fiveMinNums[0];
    let twoMinNum = this.state.twoMinNums[0];
    let postMinNum = this.state.postNums[0];
    let addedNumbers = [];

    if (typeof this.state.fifteenMinNums[0] !== undefined) {
      for (let i = 0; i < this.state.fifteenMinNums.length; i++) {
        let newFirst;
        let newSecond;
        let newThird;
        let newForth;
        // PER change from 1st Number
        let perChange2;
        let perChange3;
        let perChange4;

        let fifteenMinNum = this.state.fifteenMinNums[i];
        if (typeof tenMinNum === "string") {
          let change15To10 = this.percentChangeRow(
            this.state.tenMinNums[i],
            fifteenMinNum
          );
          newFirst = change15To10 * 0.1;
        }
        if (typeof fiveMinNum === "string") {
          let change10To5 = this.percentChangeRow(
            this.state.fiveMinNums[i],
            this.state.tenMinNums[i]
          );
          newSecond = change10To5 * 0.15;
          // PER Change w/ 1st Input
          let change15To5 = this.percentChangeRow(
            this.state.fiveMinNums[i],
            fifteenMinNum
          );
          perChange2 = change15To5 * 0.15;
        }

        if (typeof twoMinNum === "string") {
          let change5To2 = this.percentChangeRow(
            this.state.twoMinNums[i],
            this.state.fiveMinNums[i]
          );
          newThird = change5To2 * 0.3;
          // PER Change w/ 1st Input
          let change15To2 = this.percentChangeRow(
            this.state.twoMinNums[i],
            fifteenMinNum
          );
          perChange3 = change15To2 * 0.3;
        }
        if (typeof postMinNum === "string") {
          let change2ToPost = this.percentChangeRow(
            this.state.postNums[i],
            this.state.twoMinNums[i]
          );
          newForth = change2ToPost * 0.45;
          // PER Change w/ 1st Input
          let change15ToPost = this.percentChangeRow(
            this.state.postNums[i],
            fifteenMinNum
          );
          perChange4 = change15ToPost * 0.45;
        }
        let addNews = newFirst + newSecond + newThird + newForth;
        let avgNews = addNews / 4;
        let addBrandNews = newFirst + perChange2 + perChange3 + perChange4;
        let avgBrandNews = addBrandNews / 4;
        let totalSum = addNews + avgNews + addBrandNews + avgBrandNews;
        addedNumbers.push(totalSum);
      }
      this.rowNumber(
        this.state.totalHorsesCurrent,
        this.state.horsesNextRace,
        addedNumbers
      );
    }
  }

  percentChange(oldNum, newNum) {
    let minus = oldNum - newNum;
    let divide = minus / oldNum;
    let answer = divide * 100;
    return answer;
  }
  percentChangeInc(newNum, oldNum) {
    let minus = newNum - oldNum;
    let divide = minus / oldNum;
    let answer = divide * 100;
    return answer;
  }

  percentChangeRow(newNum, oldNum) {
    let answer = 0;
    if (parseInt(newNum) < parseInt(oldNum)) {
      let decrease = this.percentChange(parseInt(oldNum), parseInt(newNum));
      answer += decrease;
    } else {
      let increase = this.percentChangeInc(parseInt(newNum), parseInt(oldNum));
      answer -= increase;
    }
    return answer;
  }

  rowNumber(currentTotalNum, nextRaceHorses, arr) {
    let addedRows = {};
    for (let i = 0; i < arr.length; i++) {
      let id = i + 1;
      let numRows = currentTotalNum / nextRaceHorses;
      let numColumns = currentTotalNum / numRows;
      let temp = id / numColumns;
      let curHorse = Math.ceil(temp);
      if (addedRows[curHorse]) {
        addedRows[curHorse] = addedRows[curHorse] += arr[i];
      } else {
        addedRows[curHorse] = arr[i];
      }
    }
    console.log(addedRows);
    let answer = Object.values(addedRows);
    let newArr = answer.map((n) => n / 100);
    this.setState({ summedTotals: newArr });
  }

  inputNext(num) {
    let claass = "";
    for (let i = 0; i < num; i++) {
      claass += "auto ";
    }
    this.setState({ auto: claass });
  }
  inputCurrent(num) {
    let claass = "";
    for (let i = 0; i < num; i++) {
      claass += "auto ";
    }
    this.setState({ rowNums: claass });
  }
  handleClick() {
    this.inputNext(this.state.horsesNextRace);
    this.inputCurrent(this.state.horsesThisRace);
    this.handleColumnNums();
    this.handleRowNums();
    this.fifteenMinHandleSplit(this.state.fifteenMin);
    this.tenMinHandleSplit(this.state.tenMin);
    this.fiveMinHandleSplit(this.state.fiveMin);
    this.twoMinHandleSplit(this.state.twoMin);
    this.postHandleSplit(this.state.postMin);
    this.totalPercentChange();
  }

  handleRaceNumChange(event) {
    this.setState({ horsesNextRace: event.target.value });
  }
  handleCurHorseNum(event) {
    this.setState({ horsesThisRace: event.target.value });
  }
  handleColumnNums() {
    let arr = [];
    let num = this.state.horsesNextRace;
    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }
    this.setState({ columns: arr });
  }
  handleRowNums() {
    let arr = [];
    let num = this.state.horsesThisRace;
    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }
    this.setState({ rows: arr });
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
    const divStyleColumns = {
      gridTemplateColumns: this.state.auto,
    };
    const divStyleRows = {
      gridTemplateColumns: this.state.rowNums,
    };

    return (
      <div>
        <h1 className="title">DOUBLES CHART</h1>
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
        <label>Horses in CURRENT race</label>
        <input
          type="number"
          value={this.state.value}
          onChange={this.handleCurHorseNum}
        />
        <button className="btn" onClick={this.handleClick}>
          Generate
        </button>

        <div style={divStyleColumns} className="grid-container">
          {this.state.columns.map((n, index) => (
            <h1 className="grid-item-num" key={index}>
              {n}
            </h1>
          ))}

          {this.state.fifteenMinNums.map((n, index) => (
            <Ball
              //num={n}
              totalHorsesCurrent={this.state.totalHorsesCurrent}
              currentRace={this.state.horsesNextRace}
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
        <h2 className="title">CURRENT RACE TOTALS</h2>
        <div style={divStyleRows} className="sumNum-grid-item-num">
          {this.state.rows.map((n, index) => (
            <h1 className="grid-item-num" key={index}>
              {n}
            </h1>
          ))}
          {this.state.summedTotals.map((n, index) => (
            <p
              className={"grid-item-num" + (n > 0 ? "-HIT" : "-NO")}
              key={index}
            >
              {Math.round(100 * n) / 100}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Lottery;
