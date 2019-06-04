import { call, put, take, takeLatest } from 'redux-saga/effects';
import { ChatService } from '../services';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* subscribeToMessagesFromServer({ payload: { username } }) {
  let channel = null;
  try {
    yield call(ChatService.createConnection);
    yield put(actions.connectSucceeded(username));
    channel = yield call(ChatService.createChannel);
    while (true) {
      const message = yield take(channel);
      yield put(actions.messageReceived(message));
    }
  } catch (error) {
    console.error('socket error:', error);
    channel && channel.close();
  }
}

function* sendMessageToServer({ payload: { message } }) {
  try {
    yield ChatService.sendMessage(message);
  } catch (error) {
    console.error('Failed to send message', error);
  }
}

export function* watchMessageSend() {
  yield takeLatest(actionTypes.MESSAGE_SEND, sendMessageToServer);
}

export function* watchConnectRequested() {
  yield takeLatest(actionTypes.CONNECT_REQUESTED, subscribeToMessagesFromServer);
}
