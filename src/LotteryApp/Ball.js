import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentChange10: 0,
      percentChange5: 0,
      percentChange2: 0,
      percentChange: 0,
      numbers15: "numbers15",
      numbers10: "numbers10",
      numbers5: "numbers5",
      numbers2: "numbers2",
      numbersPost: "numbersPost",
      perChangeCss1: "perChange",
      perChangeCss2: "perChange",
      perChangeCss3: "perChange",
      perChangeCss4: "perChange",
      calledFifteenTo10: false,
      calledTenTo5: false,
      calledFiveTo2: false,
      calledTwoToPost: false,
      addNewState: 0,
      avgNewState: 0,
      addBrandNewState: 0,
      avgBrandNewState: 0,
    };
    this.percentChange = this.percentChange.bind(this);
    this.rowNumber = this.rowNumber.bind(this);
    this.percentChangeInc = this.percentChangeInc.bind(this);
    this.fifteenToTen = this.fifteenToTen.bind(this);
    this.tenToFive = this.tenToFive.bind(this);
    this.fiveToTwo = this.fiveToTwo.bind(this);
    this.twoToPost = this.twoToPost.bind(this);
    this.main = this.main.bind(this);
    this.percentChangeOverall = this.percentChangeOverall.bind(this);
  }

  main() {
    this.fifteenToTen();
    this.tenToFive();
    this.fiveToTwo();
    this.twoToPost();
  }

  componentDidMount() {
    console.log("this.fifteenToTen() component did mount");
  }

  componentDidUpdate(prevProps) {
    let tenMinNum = this.props.tenMinNum;
    let fiveMinNum = this.props.fiveMinNum;
    let twoMinNum = this.props.twoMinNum;
    let postNum = this.props.postNum;
    if (tenMinNum !== undefined && this.state.calledFifteenTo10 === false) {
      this.fifteenToTen();
      this.setState({ calledFifteenTo10: true });
    } else if (
      prevProps.tenMinNum !== tenMinNum &&
      this.state.calledFifteenTo10 === true
    ) {
      this.main();
    }
    if (fiveMinNum !== undefined && this.state.calledTenTo5 === false) {
      this.tenToFive();
      this.setState({ calledTenTo5: true });
    } else if (
      prevProps.fiveMinNum !== fiveMinNum &&
      this.state.calledTenTo5 === true
    ) {
      this.main();
    }
    if (twoMinNum !== undefined && this.state.calledFiveTo2 === false) {
      this.fiveToTwo();
      this.setState({ calledFiveTo2: true });
    } else if (
      prevProps.twoMinNum !== twoMinNum &&
      this.state.calledFiveTo2 === true
    ) {
      this.main();
    }
    if (postNum !== undefined && this.state.calledTwoToPost === false) {
      this.twoToPost();
      this.setState({ calledTwoToPost: true });
    } else if (
      prevProps.postNum !== postNum &&
      this.state.calledTwoToPost === true
    ) {
      this.main();
    }
  }

  percentChangeOverall() {
    let { fifteenMinNum } = this.props;
    let { tenMinNum } = this.props;
    let { fiveMinNum } = this.props;
    let { twoMinNum } = this.props;
    let { postNum } = this.props;
    let perChangeFirst = this.percentChange(fifteenMinNum, tenMinNum);
    let perChangeSecond = this.percentChange(tenMinNum, fiveMinNum);
    let perChangeThird = this.percentChange(fiveMinNum, twoMinNum);
    let perChangeForth = this.percentChange(twoMinNum, postNum);
    // Weighed Averages
    let newFirst = perChangeFirst * 0.1;
    let newSecond = perChangeSecond * 0.15;
    let newThird = perChangeThird * 0.3;
    let newForth = perChangeForth * 0.45;
    // Summed
    let addNews = newFirst + newSecond + newThird + newForth;
    this.setState({ addNewState: addNews });
    // AVG Weighed
    let avgNews = addNews / 4;
    this.setState({ avgNewState: avgNews });
    // PER change from 1st Number
    let perChange1 = this.percentChange(fifteenMinNum, tenMinNum);
    let perChange2 = this.percentChange(fifteenMinNum, fiveMinNum);
    let perChange3 = this.percentChange(fifteenMinNum, twoMinNum);
    let perChange4 = this.percentChange(fifteenMinNum, postNum);
    let newFirst1 = perChange1 * 0.1;
    let newSecond2 = perChange2 * 0.15;
    let newThird3 = perChange3 * 0.3;
    let newForth4 = perChange4 * 0.45;
    // Summed PER Change from FIRST input
    let addBrandNews = newFirst1 + newSecond2 + newThird3 + newForth4;
    this.setState({ addBrandNewState: addBrandNews });
    // Average of the SUMS
    let avgBrandNews = addBrandNews / 4;
    this.setState({ avgBrandNewState: avgBrandNews });
    // SET the CSS based on positive or negative
    if (addNews > 9) {
      let newPerChangeCss1 = "perChangeHit";
      this.setState({ perChangeCss1: newPerChangeCss1 });
    } else {
      let regular = "perChange";
      this.setState({ perChangeCss1: regular });
    }
    if (avgNews > 9) {
      let newPerChangeCss2 = "perChangeHit";
      this.setState({ perChangeCss2: newPerChangeCss2 });
    } else {
      let regular = "perChange";
      this.setState({ perChangeCss2: regular });
    }
    if (addBrandNews > 9) {
      let newPerChangeCss3 = "perChangeHit";
      this.setState({ perChangeCss3: newPerChangeCss3 });
    } else {
      let regular = "perChange";
      this.setState({ perChangeCss3: regular });
    }
    if (avgBrandNews > 9) {
      let newPerChangeCss4 = "perChangeHit";
      this.setState({ perChangeCss4: newPerChangeCss4 });
    } else {
      let regular = "perChange";
      this.setState({ perChangeCss4: regular });
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
  // associates rows (this race)
  rowNumber(currentTotalNum, nextRaceHorses, id) {
    let numRows = currentTotalNum / nextRaceHorses;
    let numColumns = currentTotalNum / numRows;
    let temp = id / numColumns;
    let curHorse = Math.ceil(temp);
    return curHorse;
  }

  //this.rowNumber(totalHorsesCurrent, currentRace, id);
  // 15 --> 10
  fifteenToTen() {
    let fifteenMinNum = this.props.fifteenMinNum;
    let tenMinNum = this.props.tenMinNum;
    let numbers10;
    if (parseInt(fifteenMinNum) > parseInt(tenMinNum)) {
      let perChange = this.percentChange(
        parseInt(fifteenMinNum),
        parseInt(tenMinNum)
      );

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
      this.setState({ numbers10: "numbers10" });
      let newPerChange10 = this.state.percentChange - perChangeIn10;
      this.setState({ percentChange: newPerChange10 });
    }
  }
  // 10 --> 5
  tenToFive() {
    let fiveMinNum = this.props.fiveMinNum;
    let tenMinNum = this.props.tenMinNum;
    let numbers5;
    if (parseInt(tenMinNum) > parseInt(fiveMinNum)) {
      let perChange = this.percentChange(
        parseInt(tenMinNum),
        parseInt(fiveMinNum)
      );
      //let newPerChange = this.state.percentChange + perChange;
      if (perChange > 23.0) {
        numbers5 = "numbers5BigHit";
        this.setState({ numbers5: numbers5 });
      } else {
        numbers5 = "numbers5Hit";
        this.setState({ numbers5: numbers5 });
      }
      this.setState({ percentChange10: perChange });
    } else if (parseInt(tenMinNum) <= parseInt(fiveMinNum)) {
      let perChangeIn5 = this.percentChangeInc(
        parseInt(fiveMinNum),
        parseInt(tenMinNum)
      );
      this.setState({ numbers5: "numbers5" });
      let newPerChange5 = this.state.percentChange10 - perChangeIn5;
      this.setState({ percentChange10: newPerChange5 });
    }
  }
  // 5 --> 2
  fiveToTwo() {
    let fiveMinNum = this.props.fiveMinNum;
    let twoMinNum = this.props.twoMinNum;
    let numbers2;
    if (parseInt(fiveMinNum) > parseInt(twoMinNum)) {
      let perChange = this.percentChange(
        parseInt(fiveMinNum),
        parseInt(twoMinNum)
      );
      //let newPerChange = this.state.percentChange10 + perChange;

      if (perChange > 23.0) {
        numbers2 = "numbers2BigHit";
        this.setState({ numbers2: numbers2 });
      } else {
        numbers2 = "numbers2Hit";
        this.setState({ numbers2: numbers2 });
      }
      this.setState({ percentChange5: perChange });
    } else if (parseInt(fiveMinNum) <= parseInt(twoMinNum)) {
      let perChangeIn2 = this.percentChangeInc(
        parseInt(twoMinNum),
        parseInt(fiveMinNum)
      );
      this.setState({ numbers2: "numbers2" });
      let newPerChange2 = this.state.percentChange5 - perChangeIn2;
      this.setState({ percentChange5: newPerChange2 });
    }
  }
  // 2 --> POST
  twoToPost() {
    let postNum = this.props.postNum;
    let twoMinNum = this.props.twoMinNum;
    let numbersPost;
    // let newPerChangeCss;
    if (parseInt(twoMinNum) > parseInt(postNum)) {
      let perChange = this.percentChange(
        parseInt(twoMinNum),
        parseInt(postNum)
      );
      // let newPerChange = this.state.percentChange5 + perChange;
      if (perChange > 23.0) {
        numbersPost = "numbersPostBigHit";
        this.setState({ numbersPost: numbersPost });
      } else {
        numbersPost = "numbersPostHit";
        this.setState({ numbersPost: numbersPost });
      }
      this.setState({ percentChange2: perChange });
    } else if (parseInt(twoMinNum) <= parseInt(postNum)) {
      let perChangeInPost = this.percentChangeInc(
        parseInt(postNum),
        parseInt(twoMinNum)
      );
      this.setState({ numbersPost: "numbersPost" });
      let newPerChangePost = this.state.percentChange2 - perChangeInPost;
      this.setState({ percentChange2: newPerChangePost });
    }

    // setTimeout(() => {
    //   this.percentChangeOverall();
    // }, 1000);
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

        {/* <ul className={List}>
          <li className={this.state.perChangeCss3}>
            SUM W/ 1st: {Math.round(10 * this.state.addBrandNewState) / 10}
          </li>
          <li className={this.state.perChangeCss1}>
            SUM PC: {Math.round(10 * this.state.addNewState) / 10}
          </li>
          <li className={this.state.perChangeCss4}>
            AVG W/ 1st: {Math.round(10 * this.state.avgBrandNewState) / 10}
          </li>
          <li className={this.state.perChangeCss2}>
            AVG PC: {Math.round(10 * this.state.avgNewState) / 10}
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Ball;
