import React, { Component } from "react";
import "./App.css";
//import GithubUserInfo from "./LifeCycleMethods/GithubUserInfo";
import Lottery from "./LotteryApp/Lottery";

class App extends Component {
  render() {
    return (
      <div>
        {/* <GithubUserInfo username="JordanMichele" /> */}
        <Lottery />
      </div>
    );
  }
}

export default App;
