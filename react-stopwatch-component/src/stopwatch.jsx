import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      running: false
    };

    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleStartTimer() {
    this.intervalId = setInterval(this.tick, 1000);
    this.setState({ running: true });
  }

  handleStopTimer() {
    clearInterval(this.intervalId);
    this.setState({ running: false });
  }

  reset() {
    if (!this.state.running) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    // console.log('State:', this.state);
    // console.log('props:', this.props);
    const isClicked = this.state.running;
    let button = 'play';
    let onClick = this.handleStartTimer;
    const seconds = this.state.counter;
    const reset = this.reset;

    if (isClicked) {
      onClick = this.handleStopTimer;
      button = 'pause';

    } else {
      return (
      <div>
        <div className="row">
          <div className="column-full">
            <div className="outer"><p>{seconds}</p></div>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <button className={`button ${button}`} onClick={onClick}></button>
          </div>
        </div>
      </div>
      );
    }

    if (!this.state.running && button === 'pause') {
      return (
        <div>
          <div className="row">
            <div className="column-full">
              <div className="outer" onClick={reset}><p>{seconds}</p></div>
            </div>
          </div>
          <div className="row">
            <div className="column-full">
              <button className={`button ${button}`} onClick={onClick}></button>
            </div>
          </div>
        </div>
      );
    }
  }
}
