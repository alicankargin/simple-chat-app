import * as actionTypes from './actionTypes';

export function connectRequested(username) {
  return {
    type: actionTypes.CONNECT_REQUESTED,
    payload: {
      username,
    },
  };
}

export function connectSucceeded(username) {
  return {
    type: actionTypes.CONNECT_SUCCEEDED,
    payload: {
      username,
    },
  };
}

export function messageSend(message) {
  return {
    type: actionTypes.MESSAGE_SEND,
    payload: {
      message,
    },
  };
}

export function messageReceived(message) {
  return {
    type: actionTypes.MESSAGE_RECEIVED,
    payload: {
      message,
    },
  };
}

export function messageGetAll() {
  return {
    type: actionTypes.MESSAGE_GET_ALL,
  };
}

export function messageGetAllSucceeded(messages) {
  return {
    type: actionTypes.MESSAGE_GET_ALL_SUCCEEDED,
    payload: {
      messages,
    },
  };
}
