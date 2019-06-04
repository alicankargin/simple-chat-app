import React from 'react';
import moment from 'moment';

export const Messages = ({ messages }) => {
  const messageElements = messages.map((message, index) => (
    <div className="messages__message" key={message.id}>
      <div className="messages__username">{message.username}</div>
      <div className="messages__text">{message.text}</div>
      <div className="messages__date">{moment(message.date).format('Do MMM YYYY h:mm')}</div>
    </div>
  ));

  return <div className="messages">{messageElements}</div>;
};
