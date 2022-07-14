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
    if (this.state.counter < 4) {
      return <button className="btn btn-indigo" onClick={this.handleClick}>
        {text}
      </button>;
    } else if (count < 7) {
      return <button className="btn btn-purple" onClick={this.handleClick}>
        {text}
      </button>;
    } else if (count < 10) {
      return <button className="btn btn-roman" onClick={this.handleClick}>
        {text}
      </button>;
    } else if (count < 13) {
      return <button className="btn btn-apricot" onClick={this.handleClick}>
        {text}
      </button>;
    } else if (count < 16) {
      return <button className="btn btn-yellow" onClick={this.handleClick}>
        {text}
      </button>;
    } else if (count >= 16) {
      return <button className="btn btn-white" onClick={this.handleClick}>
        {text}
      </button>;
    }

  }
}
