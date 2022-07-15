import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      second: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // tick() {
  //   this.setState({ seconds: this.state.seconds + 1 });
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     return this.setState(state => {
  //       return {
  //         second: state.second === 59 ? 0 : state.second + 1
  //       };
  //     });
  //   }, 1000);
  // }

  reset() {
    this.setState({ seconds: 0 });
  }

  handleClick() {
    setInterval(() => {
      return this.setState(state => {
        return {
          isClicked: !this.state.isClicked,
          second: state.second === 59 ? 0 : state.second + 1
        };
      });
    }, 1000);
    // this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    // console.log('State:', this.state);
    // console.log('props:', this.props);
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
      <div>
        <div className="row">
          <div className="column-full">
            <div className="outer"><p>{this.state.second}</p></div>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
              <button className="button pause" onClick={this.handleClick}></button>
          </div>
        </div>
      </div>
      );
    } else if (!isClicked) {
      return (
      <div>
        <div className="row">
          <div className="column-full">
            <div className="outer"><p></p></div>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <button className="button play" onClick={this.handleClick}></button>
          </div>
        </div>
      </div>
      );
    }
  }
}
