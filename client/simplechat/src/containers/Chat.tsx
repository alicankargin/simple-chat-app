import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../components/LoginForm';
import { MessageForm } from '../components/MessageForm';
import { Messages } from '../components/Messages';
import { connectRequested, messageGetAll, messageSend } from '../redux/actions';
import { getConnected, getMessages, getUsername } from '../redux/selectors';
import { IncomingMessage, OutgoingMessage } from '../redux/types';

import './Chat.scss';

interface Props {
  connected: Boolean;
  connectRequested: () => void;
  messages: IncomingMessage[],
  messageGetAll: () => void;
  messageSend: (message: OutgoingMessage) => void;
  username: string
}

export class ChatComponent extends Component<Props> {
  public componentDidMount() {
    const { connected } = this.props;
    if (connected) {
      this.props.messageGetAll();
    }
  }

  public componentDidUpdate(prevProps) {
    if (this.props.connected !== prevProps.connected) {
      const { connected } = this.props;
      if (connected) {
        this.props.messageGetAll();
      }
    }
  }

  public handleRender() {
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

  public render() {
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
