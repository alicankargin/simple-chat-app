import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageForm.scss';
export class MessageForm extends Component {
  static props = {
    username: PropTypes.string.isRequired,
    messageSend: PropTypes.func.isRequired,
  };

  state = {
    messageText: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.messageSend({
      username: this.props.username,
      text: this.state.messageText,
    });
  };

  handleChange = (event) => {
    this.setState({
      messageText: event.target.value,
    });
  };

  render() {
    const messageText = this.props.messageText;
    return (
      <form className="message-form form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="message-form__message-input"
          onChange={this.handleChange}
          value={messageText}
        />
        <input
          type="submit"
          className="message-form__button"
          disabled={!this.state.messageText}
          value="Send"
        />
      </form>
    );
  }
}
