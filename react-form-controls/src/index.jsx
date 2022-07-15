import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullName: ''
    };
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value });
  // }

  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value });
  // }

  // Universal handleChange method
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    console.log('Input name:', name);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-full-name">
          Full Name:
          <input
            id="signup-full-name"
            name="fullName"
            type="text"
            value={this.state.fullName}
            onChange={this.handleChange} />
        </label>
      <label htmlFor="signup-username">
        Username:
        <input
        id="signup-username"
        name="username"
        type="text"
        value={this.state.name}
        // onChange={this.handleUsernameChange}
        onChange={this.handleChange}/>
      </label>
        <label htmlFor="signup-password">
        Password:
          <input
          id="signup-password"
          name="password"
          type="password"
          value={this.state.password}
          // onChange={this.handlePasswordChange} />
          onChange={this.handleChange} />
      </label>
        <button type="submit">Sign Up</button>
    </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
