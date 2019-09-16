import React, { Component } from 'react';

import './LoginForm.scss';

interface Props {
  connectRequested: (username: string) => void;
}

interface State {
  username: string;
}

export class LoginForm extends Component<Props, State>  {
  public state: State = {
    username: '',
  };

  public handleSubmit = (event) => {
    event.preventDefault();
    this.props.connectRequested(this.state.username);
  };

  public handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  public render() {
    const { username } = this.state;
    return (
      <form className="login-form form" onSubmit={this.handleSubmit}>
        <label className="login-form__label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="login-form__username-input text-input"
          id="username"
          onChange={this.handleChange}
          value={username}
          placeholder="Enter username"
        />
        <input
          type="submit"
          className="login-form__button button"
          disabled={!this.state.username}
          value="Connect"
        />
      </form>
    );
  }
}
