import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConnected, getUsername } from '../redux/selectors';
import { connectRequested } from '../redux/actions';
import { LoginForm } from '../components/LoginForm';
import { MessageForm } from '../components/MessageForm';

class ChatComponent extends Component {
  static props = {
    connected: PropTypes.bool,
    username: PropTypes.string,
    connectRequested: PropTypes.func,
  };

  render() {
    const { connected, username } = this.props;
    if (!connected) {
      return <LoginForm connectRequested={this.props.connectRequested} />;
    } else {
      return <MessageForm username={username} messageSend={this.props.messageSend} />;
    }
  }
}

const mapStateToProps = (state) => ({
  connected: getConnected(state),
  username: getUsername(state),
});

export const Chat = connect(
  mapStateToProps,
  { connectRequested },
)(ChatComponent);
