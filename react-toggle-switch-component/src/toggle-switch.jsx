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
    let outerClass = '';
    let innerClass = '';
    let text = 'OFF';

    if (!isClicked) {
      outerClass = 'click-one';
      innerClass = 'click-two';
      text = 'ON';
    }

    return (
      <div className={`outer ${outerClass}`} onClick={this.handleClick}>
        <div className={`inner ${innerClass}`}>
          <p>{text}</p>
      </div>
    </div>
    );
  }
}
