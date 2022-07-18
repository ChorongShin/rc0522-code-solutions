import React from 'react';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordError: '',
      color: '',
      icon: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    if (this.state.password.length === 0) {
      this.setState({
        passwordError: 'A password is required.',
        color: 'red',
        icon: 'fa-solid fa-x fa-lg'
      });
    } else if (this.state.password.length > 0 && this.state.password.length < 8) {
      this.setState({
        passwordError: 'Your password is too short.',
        color: 'red',
        icon: 'fa-solid fa-x fa-lg'
      });
    } else if (this.state.password.search(regex) === -1) {
      this.setState({
        passwordError: 'Your password must have at least one uppercase letter, one lowercase letter, one number and one special character',
        color: 'red',
        icon: 'fa-solid fa-x fa-lg'
      });
    } else if (this.state.password.length > 8 && this.state.password.search(regex) !== -1) {
      this.setState({
        passwordError: '',
        color: 'green',
        icon: 'fa-solid fa-check fa-lg'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-password">Password </label>
        <div className="password-div">
          <input
          type="password"
          id="signup-password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
           />
           <span className={this.state.color}>
            <i className={this.state.icon}></i>
           </span>
        </div>
        <span className="error-message">{this.state.passwordError}</span>
      </form>
    );
  }
}
