import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { IncomingMessage } from '../../redux/types';

import './Messages.scss';

interface Props {
  messages: IncomingMessage[];
  username: string;
}

const YOU = 'You';
const DATE_FORMAT = 'Do MMM YYYY HH:mm';

export const Messages: FunctionComponent<Props> = ({ username, messages }) => {
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
