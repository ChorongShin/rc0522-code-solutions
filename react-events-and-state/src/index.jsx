import React from 'react';
import ReactDOM from 'react-dom/client';

// Class Solution
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({ isClicked: true });
  // }

  // Toggle back and forth
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  // Better way to render when they are returning the same thing
  render() {
    // console.log('STATE:', this.state);
    const isClicked = this.state.isClicked;
    // let text = 'Click Me!';
    // let btnClass = 'btn-red'
    // if (this.state.isClicked) {
    //   text = 'Thanks!';
    //   btnClass ='btn-green'
    // }
    return (
    <button className={`btn ${isClicked ? 'btn-green' : 'btn-red'}`} onClick={this.handleClick}>
      {isClicked ? 'Thanks!' : 'Click Me!'}
    </button>
    );
  }
}

//   render() {
//     if (this.state.isClicked) {
//       return <button>Thanks!</button>;
//     }
//     return <button onClick={this.handleClick}>Click Me!</button>;
//   }
// }

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);

// function IsClicked(props) {
//   return (
//     <button onClick={props.onClick}>
//       Thanks!
//     </button>
//   );
// }

// function IsNotClicked(props) {
//   return (
//     <button onClick={props.onClick}>
//       Click Me!
//     </button>
//   );
// }

// class CustomButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleNotClick = this.handleNotClick.bind(this);
//     this.state = { isClicked: false };
//   }

//   handleClick() {
//     this.setState({ isClicked: true });
//   }

//   handleNotClick() {
//     this.setState({ isClicked: false });
//   }

//   render() {
//     const isClicked = this.state.isClicked;
//     let button;
//     if (isClicked) {
//       button = <IsClicked onClick={this.handleNotClick} />;
//     } else {
//       button = <IsNotClicked onClick={this.handleClick} />;
//     }
//     return (
//       <div>
//         {button}
//       </div>
//     );
//   }
// }

// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container);
// root.render(<CustomButton />);
