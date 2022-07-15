import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const count = this.state.counter;
    const text = 'Hot Button';
    let btnClass = '';
    if (this.state.counter < 4) {
      btnClass = 'btn-indigo';
    } else if (count < 7) {
      btnClass = 'btn-purple';
    } else if (count < 10) {
      btnClass = 'btn-roman';
    } else if (count < 13) {
      btnClass = 'btn-apricot';
    } else if (count < 16) {
      btnClass = 'btn-yellow';
    } else if (count >= 16) {
      btnClass = 'btn-white';
    }
    return (
    <button className={`btn ${btnClass}`} onClick={this.handleClick}>
      {text}
    </button>
    );

  }
}
