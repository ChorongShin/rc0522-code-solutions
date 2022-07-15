import React from 'react';

export default class ToggleSwtich extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {

    const isClicked = this.state.isClicked;

    if (isClicked) {
      return (
        <div className="outer" onClick={this.handleClick}>
        <div className="inner"><p>OFF</p></div>
      </div>
      );
    }
    return (
      <div className="outer click-one" onClick={this.handleClick}>
      <div className="inner click-two"><p>ON</p></div>
    </div>
    );
  }
}
