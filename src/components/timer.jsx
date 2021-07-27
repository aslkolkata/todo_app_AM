import React, { Component } from "react";

class Timer extends Component {
  render() {
    return <div>Seconds: {this.props.seconds}</div>;
  }
}

export default Timer;
