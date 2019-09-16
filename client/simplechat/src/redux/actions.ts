import { CONNECT_REQUESTED, CONNECT_SUCCEEDED, MESSAGE_GET_ALL, MESSAGE_GET_ALL_SUCCEEDED, MESSAGE_RECEIVED, MESSAGE_SEND } from './types';

export function connectRequested(username) {
  return {
    type: CONNECT_REQUESTED,
    payload: {
      username,
    },
  };
}

export function connectSucceeded(username) {
  return {
    type: CONNECT_SUCCEEDED,
    payload: {
      username,
    },
  };
}

export function messageSend(message) {
  return {
    type: MESSAGE_SEND,
    payload: {
      message,
    },
  };
}

export function messageReceived(message) {
  return {
    type: MESSAGE_RECEIVED,
    payload: {
      message,
    },
  };
}

export function messageGetAll() {
  return {
    type: MESSAGE_GET_ALL,
  };
}

export function messageGetAllSucceeded(messages) {
  return {
    type: MESSAGE_GET_ALL_SUCCEEDED,
    payload: {
      messages,
    },
  };
}
