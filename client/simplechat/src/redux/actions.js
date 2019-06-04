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
