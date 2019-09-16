import React, { Component } from 'react';
import { OutgoingMessage } from '../../redux/types';

import './MessageForm.scss';

interface Props {
  messageSend: (message: OutgoingMessage) => void;
  username: string;
}

interface State {
  messageText: string;
}

export class MessageForm extends Component<Props, State> {
  public state = {
    messageText: '',
  };

  public handleSubmit = (event) => {
    event.preventDefault();

    this.props.messageSend({
      text: this.state.messageText,
      username: this.props.username,
    });

    this.setState({
      messageText: '',
    });
  };

  public handleChange = (event) => {
    this.setState({
      messageText: event.target.value,
    });
  };

  public render() {
    const messageText = this.state.messageText;
    return (
      <form className="message-form form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="message-form__message-input text-input"
          onChange={this.handleChange}
          value={messageText}
        />
        <input
          type="submit"
          className="message-form__button button"
          disabled={!this.state.messageText}
          value="Send"
        />
      </form>
    );
  }
}
