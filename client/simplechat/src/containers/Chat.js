import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConnected, getUsername, getMessages } from '../redux/selectors';
import { connectRequested, messageSend, messageGetAll } from '../redux/actions';
import { LoginForm } from '../components/LoginForm/';
import { Messages } from '../components/Messages/';
import { MessageForm } from '../components/MessageForm/';

import './Chat.scss';
export class ChatComponent extends Component {
  static props = {
    connected: PropTypes.bool.isRequired,
    connectRequested: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    messageGetAll: PropTypes.func.isRequired,
    messageSend: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { connected } = this.props;
    if (connected) {
      this.props.messageGetAll();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.connected !== prevProps.connected) {
      const { connected } = this.props;
      if (connected) {
        this.props.messageGetAll();
      }
    }
  }

  handleRender() {
    const { connected, messages, username } = this.props;
    if (!connected) {
      return <LoginForm connectRequested={this.props.connectRequested} />;
    } else {
      return (
        <>
          <Messages username={username} messages={messages} />
          <MessageForm username={username} messageSend={this.props.messageSend} />
        </>
      );
    }
  }

  render() {
    return <div className="chat">{this.handleRender()}</div>;
  }
}

const mapStateToProps = (state) => ({
  connected: getConnected(state),
  username: getUsername(state),
  messages: getMessages(state),
});

export const Chat = connect(
  mapStateToProps,
  { connectRequested, messageSend, messageGetAll },
)(ChatComponent);
