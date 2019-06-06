import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Messages.scss';

const propTypes = {
  messages: PropTypes.arrayOf(Object).isRequired,
  username: PropTypes.string.isRequired,
};

const YOU = 'You';
const DATE_FORMAT = 'Do MMM YYYY HH:mm';

export const Messages = ({ username, messages }) => {
  const messageElements = messages.map((message) => {
    const { id, username: messageUsername, text, date } = message;
    const messageClassModifier = messageUsername === username ? 'messages__message--you' : '';

    return (
      <div className={'messages__message ' + messageClassModifier} key={id}>
        <div className="messages__username">
          {messageUsername === username ? YOU : messageUsername}
        </div>
        <div className="messages__text">{text}</div>
        <div className="messages__date">{moment(date).format(DATE_FORMAT)}</div>
      </div>
    );
  });

  return <div className="messages">{messageElements}</div>;
};

Messages.propTypes = propTypes;
