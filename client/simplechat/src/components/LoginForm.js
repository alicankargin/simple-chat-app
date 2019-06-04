import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
  static props = {
    connectRequested: PropTypes.func.isRequired,
  };

  state = {
    username: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.connectRequested(this.state.username);
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
          className="login-form__button Button"
          disabled={!this.state.username}
          value="Connect"
        />
      </form>
    );
  }
}