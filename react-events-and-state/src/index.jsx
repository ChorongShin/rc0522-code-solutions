import React from 'react';
import ReactDOM from 'react-dom/client';

function IsClicked(props) {
  return (
    <button onClick={props.onClick}>
      Thanks!
    </button>
  );
}

function IsNotClicked(props) {
  return (
    <button onClick={props.onClick}>
      Click Me!
    </button>
  );
}

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleNotClick = this.handleNotClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  handleNotClick() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <IsClicked onClick={this.handleNotClick} />;
    } else {
      button = <IsNotClicked onClick={this.handleClick} />;
    }
    return (
    <div>
      {button}
    </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);
