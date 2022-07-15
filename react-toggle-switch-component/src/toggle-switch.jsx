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
      <label>
        <input className="toggle" type="checkbox" onClick={this.handleClick}></input>
     </label>
      );
    }
    return (
      <label>
        <input type="checkbox" className="toggle" onClick={this.handleClick}></input>
      </label>
    );
  }
}
