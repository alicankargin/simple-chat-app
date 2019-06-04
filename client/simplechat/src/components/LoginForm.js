import React, { Component } from 'react';

export class LoginForm extends Component {
  state = {
    username: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const { username } = this.props;
    return (
      <form className="login-form form" onSubmit={this.handleSubmit}>
        <label className="login-form__label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="login-form__username-input"
          id="username"
          onChange={this.handleChange}
          value={username}
          placeholder="Enter username"
        />
        <input
          type="submit"
          className="login-form__button"
          disabled={!this.state.username}
          value="Connect"
        />
      </form>
    );
  }
}
