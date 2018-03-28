import React, {Component} from 'react';

export default class ClockApp extends Component {
  constructor(props) {
    super(props);
    let date = this.getTimeString();
    this.state = { time: date };
  }

  getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      var date = this.getTimeString();
      this.setState({time: date})}, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1 className="section-title">React Clock</h1>
        <h5>Indianapolis, IN</h5>
        <p>{this.state.time}</p>
        <hr />
      </div>
    )
  }
}