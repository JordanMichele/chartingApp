import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentChange: 0,
      percentChange10: 0,
      percentChange5: 0,
      percentChange2: 0,
      percentChangePost: 0,
      numbers15: "numbers15",
      numbers10: "numbers10",
      numbers5: "numbers5",
      numbers2: "numbers2",
      numbersPost: "numbersPost",
      perChangeCss: "perChange",
    };
    this.percentChange = this.percentChange.bind(this);
    this.rowNumber = this.rowNumber.bind(this);
    this.percentChangeInc = this.percentChangeInc.bind(this);
    this.fifteenToTen = this.fifteenToTen.bind(this);
    this.tenToFive = this.tenToFive.bind(this);
    this.fiveToTwo = this.fiveToTwo.bind(this);
    this.twoToPost = this.twoToPost.bind(this);
  }
  componentDidMount() {
    this.fifteenToTen();
    this.tenToFive();
    this.fiveToTwo();
    this.twoToPost();
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
  // associates rows (this race)
  rowNumber(currentTotalNum, nextRaceHorses, id) {
    let numRows = currentTotalNum / nextRaceHorses;
    let numColumns = currentTotalNum / numRows;
    let temp = id / numColumns;
    let curHorse = Math.ceil(temp);
    return curHorse;
  }

  //this.rowNumber(totalHorsesCurrent, currentRace, id);
  fifteenToTen() {
    console.log("in fifteen to ten");
    let fifteenMinNum = this.props.fifteenMinNum;
    let tenMinNum = this.props.tenMinNum;
    let numbers10;
    if (parseInt(fifteenMinNum) > parseInt(tenMinNum)) {
      let perChange = this.percentChange(
        parseInt(fifteenMinNum),
        parseInt(tenMinNum)
      );
      console.log(perChange);
      if (perChange > 23.0) {
        numbers10 = "numbers10BigHit";
        this.setState({ numbers10: numbers10 });
      } else {
        numbers10 = "numbers10Hit";
        this.setState({ numbers10: numbers10 });
      }
      this.setState({ percentChange: perChange });
    } else if (parseInt(fifteenMinNum) <= parseInt(tenMinNum)) {
      let perChangeIn10 = this.percentChangeInc(
        parseInt(tenMinNum),
        parseInt(fifteenMinNum)
      );
      let newPerChange10 = this.state.percentChange - perChangeIn10;
      console.log("newPerChange10 " + newPerChange10);
      this.setState({ percentChange: newPerChange10 });
    }
  }

  tenToFive() {
    let fiveMinNum = this.props.fiveMinNum;
    let tenMinNum = this.props.tenMinNum;
    let numbers5;
    if (parseInt(tenMinNum) > parseInt(fiveMinNum)) {
      let perChange = this.percentChange(
        parseInt(tenMinNum),
        parseInt(fiveMinNum)
      );
      let newPerChange = this.state.percentChange + perChange;
      if (perChange > 23.0) {
        numbers5 = "numbers5BigHit";
        this.setState({ numbers5: numbers5 });
      } else {
        numbers5 = "numbers5Hit";
        this.setState({ numbers5: numbers5 });
      }
      this.setState({ percentChange10: newPerChange });
    } else if (parseInt(tenMinNum) <= parseInt(fiveMinNum)) {
      let perChangeIn5 = this.percentChangeInc(
        parseInt(fiveMinNum),
        parseInt(tenMinNum)
      );
      let newPerChange5 = this.state.percentChange - perChangeIn5;
      console.log("newPerChange5 " + newPerChange5);
      this.setState({ percentChange10: newPerChange5 });
    }
  }

  fiveToTwo() {
    let fiveMinNum = this.props.fiveMinNum;
    let twoMinNum = this.props.twoMinNum;
    let numbers2;
    if (parseInt(fiveMinNum) > parseInt(twoMinNum)) {
      let perChange = this.percentChange(
        parseInt(fiveMinNum),
        parseInt(twoMinNum)
      );
      let newPerChange = this.state.percentChange10 + perChange;

      if (perChange > 23.0) {
        numbers2 = "numbers2BigHit";
        this.setState({ numbers2: numbers2 });
      } else {
        numbers2 = "numbers2Hit";
        this.setState({ numbers2: numbers2 });
      }
      this.setState({ percentChange5: newPerChange });
    } else if (parseInt(fiveMinNum) <= parseInt(twoMinNum)) {
      let perChangeIn2 = this.percentChangeInc(
        parseInt(twoMinNum),
        parseInt(fiveMinNum)
      );
      let newPerChange2 = this.state.percentChange10 - perChangeIn2;
      console.log("newPerChange2 " + newPerChange2);
      this.setState({ percentChange5: newPerChange2 });
    }
  }

  twoToPost() {
    let postNum = this.props.postNum;
    let twoMinNum = this.props.twoMinNum;
    let numbersPost;
    let newPerChangeCss;
    if (parseInt(twoMinNum) > parseInt(postNum)) {
      let perChange = this.percentChange(
        parseInt(twoMinNum),
        parseInt(postNum)
      );
      let newPerChange = this.state.percentChange5 + perChange;
      if (perChange > 23.0) {
        numbersPost = "numbersPostBigHit";
        this.setState({ numbersPost: numbersPost });
      } else {
        numbersPost = "numbersPostHit";
        this.setState({ numbersPost: numbersPost });
      }
      this.setState({ percentChange2: newPerChange });
      if (newPerChange > 5) {
        newPerChangeCss = "perChangeHit";
        this.setState({ perChangeCss: newPerChangeCss });
      }
    } else if (parseInt(twoMinNum) <= parseInt(postNum)) {
      let perChangeInPost = this.percentChangeInc(
        parseInt(postNum),
        parseInt(twoMinNum)
      );
      let newPerChangePost = this.state.percentChange5 - perChangeInPost;
      console.log("newPerChangePost " + newPerChangePost);
      this.setState({ percentChange2: newPerChangePost });
    }
  }

  render() {
    // let { totalHorsesCurrent } = this.props;
    // let { currentRace } = this.props;
    // let { id } = this.props;
    let { fiveMinNum } = this.props;
    let { twoMinNum } = this.props;
    let { tenMinNum } = this.props;
    let { fifteenMinNum } = this.props;
    let { postNum } = this.props;
    let List = "List";

    return (
      <div className="grid-item">
        <ul className={List}>
          <li className={this.state.numbers15}> {fifteenMinNum}</li>
          <li className={this.state.numbers10}> {tenMinNum}</li>
          <li className={this.state.numbers5}> {fiveMinNum}</li>
          <li className={this.state.numbers2}> {twoMinNum}</li>
          <li className={this.state.numbersPost}> {postNum}</li>
        </ul>
        {/* <p className="perChange">
          PC: {Math.round(100 * this.state.percentChange) / 100}
        </p>
        <p className="perChange">
          PC10: {Math.round(100 * this.state.percentChange10) / 100}
        </p>
        <p className="perChange">
          PC5: {Math.round(100 * this.state.percentChange5) / 100}
        </p> */}
        <p className={this.state.perChangeCss}>
          Total PC: {Math.round(100 * this.state.percentChange2) / 100}
        </p>
      </div>
    );
  }
}

export default Ball;
